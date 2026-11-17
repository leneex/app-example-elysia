import { Elysia } from "elysia";

// Порт передаёт платформа в переменной PORT; без неё — 3000
const port = Number(process.env.PORT) || 3000;

new Elysia()
  .get("/", () => "Hello world")
  .listen({ hostname: "0.0.0.0", port });

console.log(`Elysia is running on port ${port}`);
