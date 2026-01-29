ALTER TABLE "text_copies" ALTER COLUMN "viewcount" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "text_copies" ALTER COLUMN "viewcount" SET NOT NULL;