import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

// Get database credentials from environment variables
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = parseInt(process.env.DB_PORT || '3306');
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbName = process.env.DB_NAME || 'vibe_coding';

// Create connection pool
const pool = mysql.createPool({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Initialize Drizzle
export const db = drizzle(pool);
