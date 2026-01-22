import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private configService: ConfigService) {
    // Por quê usar adapter no Prisma 7?
    // No Prisma 7, você DEVE usar um adapter específico para cada banco de dados
    // Para MySQL/MariaDB, usamos @prisma/adapter-mariadb
    const databaseUrl = configService.get<string>('DATABASE_URL') || process.env.DATABASE_URL;
    
    if (!databaseUrl) {
      throw new Error('DATABASE_URL environment variable is not set. Please check your .env file.');
    }

    // Parsear a URL de conexão MySQL
    // Formato: mysql://user:password@host:port/database
    const url = new URL(databaseUrl);
    
    // Criar adapter MariaDB com os parâmetros parseados
    const adapter = new PrismaMariaDb({
      host: url.hostname,
      port: parseInt(url.port) || 3306,
      user: url.username,
      password: url.password,
      database: url.pathname.slice(1), // Remove a barra inicial
      connectionLimit: 10,
    });
    
    // Passar adapter para o PrismaClient
    super({ adapter });
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
