import { Elysia } from 'elysia';

// Initialize port from environment or use default
const port = parseInt(process.env.PORT || '3000');

// Create Elysia app
const app = new Elysia()
  .get('/', () => ({
    message: 'Welcome to Vibe Coding API',
    version: '1.0.0',
  }))
  .get('/health', () => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
  }))
  .listen(port);

console.log(`🦊 Server running at http://localhost:${port}`);
