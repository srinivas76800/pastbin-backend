import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TextcopyModule } from './textcopy/textcopy.module';
import { DrizzleModule } from './db/drizzle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 🔥 THIS is important
    }),
    DrizzleModule,TextcopyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
