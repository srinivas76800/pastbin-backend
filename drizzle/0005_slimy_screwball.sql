ALTER TABLE "text_copies" DROP CONSTRAINT "text_copies_viewcount_unique";--> statement-breakpoint
ALTER TABLE "text_copies" ALTER COLUMN "viewcount" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "text_copies" ALTER COLUMN "viewcount" DROP NOT NULL;