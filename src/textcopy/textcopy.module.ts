import { Module } from '@nestjs/common';
import { TextcopyController } from './textcopy.controller';
import { TextcopyService } from './textcopy.service';

@Module({
  controllers: [TextcopyController],
  providers: [TextcopyService]
})
export class TextcopyModule {}
