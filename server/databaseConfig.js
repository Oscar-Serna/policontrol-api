import mysql from 'mysql2/promise';

import {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT
} from "./serverConfig.js";

export const connection = await mysql.createConnection({
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST
});