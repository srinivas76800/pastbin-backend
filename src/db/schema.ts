import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const textCopies = pgTable('text_copies', {
  id: uuid('id').defaultRandom().primaryKey(),
  content: text('content').notNull(),
  url: text('url'),
  viewCount: integer('viewcount').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});
