import { db } from '../db';
import { users, type User } from '../schemas';
import { hash } from 'bcryptjs';
import { eq } from 'drizzle-orm';

/**
 * Hash password using bcryptjs
 * @param password - Plain text password
 * @returns Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}

/**
 * Get user by email from database
 * @param email - User email
 * @returns User data if found, undefined otherwise
 */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.email, email));
  return result[0];
}

/**
 * Create a new user with validation
 * @param name - User full name
 * @param email - User email
 * @param password - Plain text password (will be hashed)
 * @returns Created user data (without password)
 * @throws Error if email already exists or database error occurs
 */
export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  // Check if email already exists
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error('Email sudah terdaftar');
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Insert new user
  const result = await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
  });

  // Get and return the created user (without password)
  const createdUser = await getUserByEmail(email);
  if (!createdUser) {
    throw new Error('Gagal membuat user');
  }

  return createdUser;
}
