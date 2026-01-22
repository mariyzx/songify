import { defineConfig, env } from 'prisma/config';
import 'dotenv/config';

export default defineConfig({
  schema: './prisma/schema.prisma',

  // Configuração da conexão com o banco
  datasource: {
    url: env('DATABASE_URL'),
  },
});
