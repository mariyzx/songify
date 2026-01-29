import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor(private configService: ConfigService) {
    const databaseUrl = configService.getOrThrow<string>('DATABASE_URL');

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
