import { Elysia } from "elysia";

// The platform passes the port in the PORT variable; 3000 by default
const port = Number(process.env.PORT) || 3000;

new Elysia()
  .get("/", () => "Hello world")
  .listen({ hostname: "0.0.0.0", port });

console.log(`Elysia is running on port ${port}`);
