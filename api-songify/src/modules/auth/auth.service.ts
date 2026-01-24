import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Logger } from 'nestjs-pino';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private readonly logger: Logger,
  ) {}

  async generateRefreshToken(userId: number): Promise<string> {
    const payload = { sub: userId, type: 'refresh' };
    return await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN') || '7d',
    });
  }

  async register(registerDto: RegisterDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: registerDto.email,
        deletedAt: null,
      },
    });
    if (user) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        email: registerDto.email,
        password: hashedPassword,
        name: registerDto.name,
      },
      select: {
        id: true,
        email: true,
        name: true,
        description: true,
        favoriteSongs: true,
      },
    });

    return newUser;
  }

  async login(loginDto: LoginDto) {
    const userWithPassword = await this.prisma.user.findFirst({
      where: {
        email: loginDto.email,
        deletedAt: null,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        description: true,
        favoriteSongs: true,
      },
    });

    if (!userWithPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      userWithPassword.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: userWithPassword.email, sub: userWithPassword.id };
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get('JWT_EXPIRES_IN'),
    });
    const refreshToken = await this.generateRefreshToken(userWithPassword.id);

    await this.prisma.user.update({
      where: { id: userWithPassword.id },
      data: { refreshToken },
    });

    const { password: _, ...userWithoutPassword } = userWithPassword;
    return {
      ...userWithoutPassword,
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });

      if (payload.type !== 'refresh') {
        throw new UnauthorizedException('Invalid token type');
      }

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user || user.refreshToken !== refreshToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const newAccessToken = this.jwtService.sign(
        { email: user.email, sub: user.id },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: this.configService.get('JWT_EXPIRES_IN'),
        },
      );

      return {
        accessToken: newAccessToken,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      this.logger.warn(
        { err: error, context: 'refreshToken' },
        'Refresh token validation failed',
      );
      if (
        error &&
        typeof error === 'object' &&
        'name' in error &&
        (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError')
      ) {
        throw new UnauthorizedException('Invalid refresh token');
      }
      throw error;
    }
  }
}
