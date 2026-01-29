import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  });
  const allowedOrigins = [
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ];
  const port = 3000;
  await app.listen(port, '0.0.0.0');
  console.log('🚀 Server running on port:', port);
  console.log('Server running on port:', port);
}
bootstrap();
