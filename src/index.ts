import { Elysia } from "elysia";
import { usersRoute } from "./routes/users-route";

// Initialize port from environment or use default
const port = parseInt(process.env.PORT || "3000");

// Create Elysia app
const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Vibe Coding API",
    version: "1.0.0",
  }))
  .get("/health", () => ({
    status: "ok",
    timestamp: new Date().toISOString(),
  }))
  .use(usersRoute)
  .listen(port);

console.log(`🦊 Server running at http://localhost:${port}`);
