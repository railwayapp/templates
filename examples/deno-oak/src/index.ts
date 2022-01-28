import { Application, Router } from "../deps.ts";

const app = new Application();
const port = parseInt(Deno.env.get("PORT") ?? "8000");

// Router to serve specific functions on routes
const router = new Router();

// Route "ping" that responds with "Pong!"
router.get("/ping", ctx => {
  ctx.response.body = "Pong!";
});

// Example of dynamic routes
router.get("/hello/:name", ctx => {
  ctx.response.body = `Hello ${ctx.params.name}!`;
});

// Apply routes
app.use(router.routes());
app.use(router.allowedMethods());

// Basic example with a global route
// Applied last, so the router will take precedence
app.use(ctx => {
  ctx.response.body = "Welcome to Railway!";
});

console.log(`Listening on port ${port}...`);
await app.listen({ port: port });
