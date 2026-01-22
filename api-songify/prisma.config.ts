// Por quê este arquivo?
// No Prisma 7, a URL de conexão não pode mais estar no schema.prisma
// Precisa estar em um arquivo prisma.config.ts separado
import { defineConfig } from 'prisma/config';

export default defineConfig({
  // Caminho para o schema
  schema: './prisma/schema.prisma',

  // Configuração da conexão com o banco
  // Usa process.env diretamente (o dotenv já foi carregado pelo ConfigModule do NestJS)
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
