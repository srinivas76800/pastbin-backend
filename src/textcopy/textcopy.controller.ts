import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TextcopyService } from './textcopy.service';

@Controller('textcopy')
export class TextcopyController {
    constructor(private srirvice:TextcopyService){}

    @Post('text')
    textCopy(@Body('text') text:string){
        return this.srirvice.copyurl(text)
    }

    @Post('copiedtext')
    textCopied(@Body('sheardurl') sheardurl:any){
        return this.srirvice.copiedtext(sheardurl)
    }

    @Get(':id')
    getText(@Param('id')id:any){
        return this.srirvice.gettext(id)
    }

}
