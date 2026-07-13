// test-db.ts
import { db } from './src/db';

const result = await db.execute('SELECT 1 as test');
console.log('Database connected!', result);