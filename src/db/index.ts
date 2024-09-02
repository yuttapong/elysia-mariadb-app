import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const connection = mysql.createPool(String(process.env['DATABASE_URL']));

export const db = drizzle(connection);
