ALTER TABLE "text_copies" ADD COLUMN "viewcount" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "text_copies" ADD CONSTRAINT "text_copies_viewcount_unique" UNIQUE("viewcount");