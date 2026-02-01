import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'https://pastbin-frontend.vercel.app',
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ];

app.enableCors({
  origin: [
    'http://localhost:3000',
    'https://pastbin-frontend.vercel.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});


const port = process.env.PORT || 3000;
await app.listen(port, '0.0.0.0');

  console.log('🚀 Server running on port:', port);
  console.log('Server running on port:', port);
}
bootstrap();
