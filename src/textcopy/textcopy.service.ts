import { Injectable } from '@nestjs/common';
import { and, eq, gte, sql } from 'drizzle-orm';
import { DrizzleService } from 'src/db/drizzle.service';
import { textCopies } from 'src/db/schema';


function randomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[Math.floor(Math.random() * letters.length)];
}

@Injectable()
export class TextcopyService {
    constructor(private readonly drizzle: DrizzleService) { }
    
    async copyurl(text: string) {
    
        const inserted = await this.drizzle.db.insert(textCopies).values({ content: text }).returning({
            id: textCopies.id,
            content: textCopies.content,
        });
    
        const id = inserted[0].id;
        const urlGen = id

        await this.drizzle.db.update(textCopies).set({ url: urlGen }).where(eq(textCopies.id,id))
        return {
            url: urlGen,
            text: text
        }
    }


    async copiedtext(sheardurl: any) {

        const result = await this.drizzle.db.select().from(textCopies).where(and(eq(textCopies.url, sheardurl), gte(textCopies.createdAt, sql`now() - interval '5 minutes'`)))
        if (result.length === 0) {
            console.log('link is expaird')
            return { 
                success:false,
                message: 'link is expaird !' ,
                data:null
            }
        }
        
        const maxview = 5
        const text = result[0]
        const viewCount = text.viewCount ?? 0

        if (viewCount >= maxview) {
            console.log('view limit cross')
            return { 
                success:false,
                message: 'view limit cross' ,
                data:null
            }
        }

        const res = await this.drizzle.db.update(textCopies).set({ viewCount: sql`${textCopies.viewCount} + 1` }).where(eq(textCopies.id, result[0].id))
        const textdata = await this.gettext(result[0].id)
        
        return {
            success:true,
            message:'data',
            data:textdata[0]
        }

    }

    async gettext(id:any){
        const result = await this.drizzle.db.select({text:textCopies.content}).from(textCopies).where(eq(textCopies.id,id))
        return result
    }

}
