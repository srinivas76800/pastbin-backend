import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://pastbin-frontend.vercel.app',
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
  });

  const port = Number(process.env.PORT);
  await app.listen(port, '0.0.0.0');

  console.log('🚀 Server running on port:', port);
}
bootstrap();
