import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL || '*',
  });

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port, '0.0.0.0');

  console.log('PORT:', process.env.PORT);
  console.log('DB:', process.env.DATABASE_URL);
  console.log(`🚀 Server running on port: ${port}`);
}
bootstrap();
