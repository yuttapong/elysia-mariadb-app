import {
  int,
  mysqlEnum,
  mysqlTable,
  uniqueIndex,
  varchar,
  serial,
  text,
} from 'drizzle-orm/mysql-core';
export const users = mysqlTable('staff', {
  id: serial('id').primaryKey(),
  firstname: varchar('name', { length: 120 }),
  lastname: varchar('lastname', { length: 120 }),
});
export type IUser = typeof users.$inferSelect; // return type when queried
export type INewUser = typeof users.$inferInsert; // insert type
