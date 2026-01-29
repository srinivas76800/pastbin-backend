import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  const port = 3000;
  await app.listen(port, '0.0.0.0');
  console.log('🚀 Server running on port:', port);
  console.log('Server running on port:', port);
}
bootstrap();
