import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { db } from './db';
import { userRoutes } from './users';
import { billRoutes } from './bills';
import cors from '@elysiajs/cors';
const app = new Elysia()
  .use(cors())
  .get('/', () => 'สวัสดี อิลิเชีย Hello Elysia')
  .use(swagger())
  .group('/api', (app) => app.use(userRoutes).use(billRoutes))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type ElysiaApp = typeof app;
