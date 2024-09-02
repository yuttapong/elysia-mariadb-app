import { Elysia } from 'elysia';
import { IBill, bills } from './bills';
import { db } from '../db';
import { eq, gt, lt, desc, asc } from 'drizzle-orm';

export const billRoutes = new Elysia().group('/bills', (app) =>
  app
    .get('/', async ({ set, query }) => {
      set.status = 200;
      let page = Number(query?.page) || 1;
      let limit = Number(query?.limit) || 20;
      const result: IBill[] = await db
        .select()
        .from(bills)
        .orderBy(desc(bills.id))
        .offset((page - 1) * limit)
        .limit(limit);
      return {
        page: page,
        limit: limit,
        items: result || [],
      };
    })
    .get('/:id', async ({ path, params, query, response }) => {
      const result: IBill[] = await db
        .select()
        .from(bills)
        .where(eq(bills.id, params.id));
      return result;
    })
);
