// src/modules/auth/auth.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Logger } from 'nestjs-pino';
import { AuthService } from './auth.service';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;
  let configService: ConfigService;

  const findFirstMock = jest.fn();
  const findUniqueMock = jest.fn();
  const createMock = jest.fn();
  const updateMock = jest.fn();
  const signMock = jest.fn().mockReturnValue('mock-access-token');
  const signAsyncMock = jest.fn().mockResolvedValue('mock-refresh-token');
  const verifyMock = jest.fn();

  beforeEach(async () => {
    jest.clearAllMocks();
    signMock.mockReturnValue('mock-access-token');
    signAsyncMock.mockResolvedValue('mock-refresh-token');
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findFirst: findFirstMock,
              findUnique: findUniqueMock,
              create: createMock,
              update: updateMock,
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: signMock,
            signAsync: signAsyncMock,
            verify: verifyMock,
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'JWT_SECRET') return 'test-secret';
              if (key === 'JWT_EXPIRES_IN') return '1d';
              if (key === 'JWT_REFRESH_SECRET') return 'test-refresh-secret';
              if (key === 'JWT_REFRESH_EXPIRES_IN') return '7d';
              return null;
            }),
          },
        },
        {
          provide: Logger,
          useValue: { warn: jest.fn(), log: jest.fn(), error: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const registerDto: RegisterDto = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123',
      };

      const hashedPassword = await bcrypt.hash(registerDto.password, 10);

      findFirstMock.mockResolvedValue(null);
      createMock.mockResolvedValue({
        id: 1,
        email: registerDto.email,
        name: registerDto.name,
        description: null,
        favoriteSongs: [],
      });

      const result = await service.register(registerDto);

      expect(result).toBeDefined();
      expect(result.email).toBe(registerDto.email);
      expect(result.name).toBe(registerDto.name);
      expect(findFirstMock).toHaveBeenCalledWith({
        where: { email: registerDto.email, deletedAt: null },
      });
      expect(createMock).toHaveBeenCalled();
    });

    it('should throw ConflictException if user already exists', async () => {
      const registerDto: RegisterDto = {
        email: 'existing@example.com',
        name: 'Existing User',
        password: 'password123',
      };

      findFirstMock.mockResolvedValue({
        id: 1,
        email: registerDto.email,
      });

      await expect(service.register(registerDto)).rejects.toThrow(
        ConflictException,
      );
      expect(createMock).not.toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('should login successfully with valid credentials', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'password123',
      };

      const hashedPassword = await bcrypt.hash(loginDto.password, 10);
      const mockUser = {
        id: 1,
        email: loginDto.email,
        name: 'Test User',
        password: hashedPassword,
        description: null,
        favoriteSongs: [],
      };

      findFirstMock.mockResolvedValue(mockUser);
      updateMock.mockResolvedValue(undefined);

      const result = await service.login(loginDto);

      expect(result).toBeDefined();
      expect(result.accessToken).toBe('mock-access-token');
      expect(result.refreshToken).toBe('mock-refresh-token');
      expect(result.id).toBe(1);
      expect(result.email).toBe(loginDto.email);
      expect(result.name).toBe('Test User');
      expect(result).not.toHaveProperty('password');
      expect(findFirstMock).toHaveBeenCalledWith({
        where: { email: loginDto.email, deletedAt: null },
        select: {
          id: true,
          email: true,
          name: true,
          password: true,
          description: true,
          favoriteSongs: true,
        },
      });
      expect(updateMock).toHaveBeenCalled();
    });

    it('should throw UnauthorizedException with invalid email', async () => {
      const loginDto: LoginDto = {
        email: 'wrong@example.com',
        password: 'password123',
      };

      findFirstMock.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException with invalid password', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'wrongpassword',
      };

      const hashedPassword = await bcrypt.hash('correctpassword', 10);
      findFirstMock.mockResolvedValue({
        id: 1,
        email: loginDto.email,
        name: 'Test User',
        password: hashedPassword,
        description: null,
        favoriteSongs: [],
      });

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
      expect(updateMock).not.toHaveBeenCalled();
    });
  });

  describe('refreshToken', () => {
    it('should return new accessToken for valid refresh token', async () => {
      const refreshToken = 'valid-refresh-token';
      const mockUser = {
        id: 1,
        email: 'test@example.com',
        refreshToken,
      };

      verifyMock.mockReturnValue({ sub: 1, type: 'refresh' });
      findUniqueMock.mockResolvedValue(mockUser);
      signMock.mockReturnValue('new-access-token');

      const result = await service.refreshToken(refreshToken);

      expect(result).toEqual({ accessToken: 'new-access-token' });
      expect(findUniqueMock).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
