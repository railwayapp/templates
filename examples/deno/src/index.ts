import { listenAndServe } from "https://deno.land/std@0.107.0/http/server.ts"

const port = parseInt(Deno.env.get("PORT") ?? "8000")
listenAndServe(`:${port}`, () => new Response("Choo Choo! Welcome to your Deno app\n"))

console.log(`http://localhost:${port}/`);
