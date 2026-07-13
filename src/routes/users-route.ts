import { Elysia, t } from 'elysia';
import { createUser } from '../services/users-service';

// Define request body schema
const registerSchema = t.Object({
  name: t.String({ minLength: 1, description: 'User full name' }),
  email: t.String({ format: 'email', description: 'User email address' }),
  password: t.String({ minLength: 1, description: 'User password' }),
});

// Create users route
export const usersRoute = new Elysia({ prefix: '/api' })
  .post(
    '/users',
    async ({ body }) => {
      try {
        // Create user
        const user = await createUser(body.name, body.email, body.password);

        // Return user data (exclude password)
        return {
          data: {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
          },
        };
      } catch (error) {
        // Handle errors
        const errorMessage =
          error instanceof Error ? error.message : 'Gagal membuat user';

        // Return error response
        throw new Error(errorMessage);
      }
    },
    {
      body: registerSchema,
      response: {
        200: t.Object({
          data: t.Object({
            id: t.Number(),
            name: t.String(),
            email: t.String(),
            createdAt: t.Date(),
          }),
        }),
      },
      detail: {
        tags: ['Users'],
        summary: 'Register new user',
        description: 'Create a new user account with email and password',
      },
    }
  );
