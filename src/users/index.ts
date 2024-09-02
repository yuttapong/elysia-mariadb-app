import { Elysia } from 'elysia';
import { IUser, users } from './users';
import { db } from '../db';
import { eq } from 'drizzle-orm';

export const userRoutes = new Elysia().group('/users', (app) =>
  app
    .get('/', async ({ set, query }) => {
      set.status = 200;
      const result: IUser[] = await db.select().from(users);
      return {
        page: query?.page || 1,
        limit: query?.limit || 20,
        items: result || [],
      };
    })
    .get('/:id', async ({ params }) => {
      const result: IUser[] = await db
        .select()
        .from(users)
        .where(eq(users.id, params.id));
      return result;
    })
);
