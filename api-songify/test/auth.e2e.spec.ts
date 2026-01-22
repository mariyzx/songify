// test/auth.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

// Por quê describe?
// Agrupa testes de integração do módulo de autenticação
describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  // Por quê beforeAll?
  // Executa uma vez antes de todos os testes
  // Útil para setup inicial (criar app, conectar ao banco, etc.)
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    // Por quê ValidationPipe?
    // Garante que os testes usam a mesma validação da aplicação real
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();

    prismaService = app.get<PrismaService>(PrismaService);
  });

  // Por quê afterAll?
  // Executa uma vez depois de todos os testes
  // Útil para cleanup (fechar conexões, limpar dados, etc.)
  afterAll(async () => {
    await app.close();
  });

  // Por quê beforeEach/afterEach?
  // Executa antes/depois de cada teste
  // Útil para limpar dados entre testes
  beforeEach(async () => {
    // Limpar dados de teste
    await prismaService.user.deleteMany({
      where: {
        email: {
          in: ['test@example.com', 'newuser@example.com'],
        },
      },
    });
  });

  describe('/auth/register (POST)', () => {
    it('should register a new user', () => {
      // Por quê request(app.getHttpServer())?
      // Supertest permite fazer requisições HTTP para a aplicação
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({
          email: 'test@example.com',
          name: 'Test User',
          password: 'password123',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body.email).toBe('test@example.com');
          expect(res.body).not.toHaveProperty('password');
        });
    });

    it('should return 409 if user already exists', async () => {
      // Criar usuário primeiro
      await prismaService.user.create({
        data: {
          email: 'existing@example.com',
          name: 'Existing User',
          password: 'hashedpassword',
        },
      });

      return request(app.getHttpServer())
        .post('/auth/register')
        .send({
          email: 'existing@example.com',
          name: 'Another User',
          password: 'password123',
        })
        .expect(409);
    });

    it('should return 400 if validation fails', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({
          email: 'invalid-email', // Email inválido
          name: 'Test',
          password: '123', // Senha muito curta
        })
        .expect(400);
    });
  });

  describe('/auth/login (POST)', () => {
    it('should login successfully', async () => {
      // Criar usuário primeiro
      const hashedPassword = await bcrypt.hash('password123', 10);
      await prismaService.user.create({
        data: {
          email: 'login@example.com',
          name: 'Login User',
          password: hashedPassword,
        },
      });

      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'login@example.com',
          password: 'password123',
        })
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('token');
          expect(res.body.user).toBeDefined();
        });
    });

    it('should return 401 with invalid credentials', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'wrong@example.com',
          password: 'wrongpassword',
        })
        .expect(401);
    });
  });
});
