import {
  int,
  mysqlEnum,
  mysqlTable,
  uniqueIndex,
  varchar,
  serial,
  text,
  date,
  decimal,
  mysqlSchema,
} from 'drizzle-orm/mysql-core';

export const Bill = mysqlSchema("bill")

export const bills = mysqlTable('bill', {
  id: serial('id').primaryKey(),
  code: varchar('code', { length: 60 }),
  company_id: int('company_id'),
  document_date: date('document_date'),
  grand_total: decimal('grand_total', { precision: 2 }),
  agent_name: varchar('agent_name', { length: 120 }),
  sender_name: varchar('sender_name', { length: 120 }),
  bill_status: varchar('bill_status', { length: 30 }),
});

export const billItems = mysqlTable('bill_items', {
  item_id: serial('item_id').primaryKey(),
  item_code: varchar('item_code', { length: 60 }),
  bill_id: int('bill_id'),
  description: text('description'),
});

export type IBill = typeof bills.$inferSelect; // return type when queried

export type INewBill = typeof bills.$inferInsert; // insert type
