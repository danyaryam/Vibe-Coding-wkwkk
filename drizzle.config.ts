import { defineConfig } from "drizzle-kit";

const dbPassword = process.env.DB_PASSWORD;

export default defineConfig({
  schema: "./src/schemas/index.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USER || "root",
    ...(dbPassword ? { password: dbPassword } : {}),
    database: process.env.DB_NAME || "vibe_coding",
  },
});
