# Vibe Coding API

Backend API project built with Bun, ElysiaJS, Drizzle ORM, and MySQL.

## Prerequisites

- **Bun** 1.3.14+ - Download from [bun.sh](https://bun.sh)
- **MySQL** 5.7+ or **MariaDB** 10.3+
- **Node.js** 18+ (optional, for compatibility)

## Quick Start

### 1. Setup Environment Variables

Copy the example environment file and update with your database credentials:

```bash
cp .env.example .env
```

Then edit `.env` with your database configuration:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=vibe_coding
PORT=3000
```

### 2. Create Database

Create the MySQL database:

```sql
CREATE DATABASE vibe_coding;
```

### 3. Install Dependencies

```bash
bun install
```

### 4. Generate & Run Migrations

Generate migration files from schema:
```bash
bun run db:generate
```

Run migrations to create tables:
```bash
bun run db:migrate
```

### 5. Start Development Server

```bash
bun run dev
```

The server will start at `http://localhost:3000`

## Available Scripts

- `bun run dev` - Start development server with auto-reload
- `bun run build` - Build for production
- `bun run start` - Run production build
- `bun run db:generate` - Generate migrations from schema changes
- `bun run db:migrate` - Apply pending migrations
- `bun run db:studio` - Open Drizzle Studio to manage database

## Project Structure

```
.
├── src/
│   ├── index.ts           # Main ElysiaJS app entry point
│   ├── db/
│   │   └── index.ts       # Database connection setup
│   ├── schemas/
│   │   └── index.ts       # Drizzle schema definitions
│   └── routes/            # API route modules
├── drizzle/               # Generated migration files
├── dist/                  # Build output
├── .env                   # Local environment variables (git ignored)
├── .env.example           # Environment variables template
├── drizzle.config.ts      # Drizzle configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies & scripts
```

## Database Management

### Add New Table

1. Edit `src/schemas/index.ts` to define your table
2. Run `bun run db:generate` to create migration
3. Run `bun run db:migrate` to apply to database

### View Database in UI

```bash
bun run db:studio
```

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint

## Development

### Add Routes

Create new route files in `src/routes/` and import them in `src/index.ts`:

```typescript
// src/routes/users.ts
import { Elysia } from 'elysia';

export const usersRoute = new Elysia()
  .get('/users', () => ({ message: 'Get all users' }));
```

Then import and use in main app:
```typescript
import { usersRoute } from './routes/users';
app.use(usersRoute);
```

### Database Queries

Use Drizzle ORM to query the database:

```typescript
import { db } from './db';
import { users } from './schemas';
import { eq } from 'drizzle-orm';

// Get all users
const allUsers = await db.select().from(users);

// Get specific user
const user = await db.select().from(users).where(eq(users.id, 1));

// Insert user
await db.insert(users).values({ name: 'John', email: 'john@example.com' });
```

## Troubleshooting

### Database Connection Failed

- Verify MySQL is running
- Check `.env` credentials match your database
- Ensure database `vibe_coding` exists

### Migration Errors

- Delete `drizzle/` folder if migrations are corrupted
- Run `bun run db:generate` again
- Check `src/schemas/index.ts` for syntax errors

## Resources

- [Bun Documentation](https://bun.sh/docs)
- [ElysiaJS Documentation](https://elysiajs.com)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [MySQL Documentation](https://dev.mysql.com/doc)

## License

MIT
