import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',              // local frontend
      'https://your-frontend-domain.com',
      process.env.FRONTEND_URL
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);

}
bootstrap();
