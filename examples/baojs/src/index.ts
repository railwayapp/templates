import Bao from "baojs";

const app = new Bao();
const port = parseInt(process.env.PORT || "8080");

app.get("/", ctx => {
  return ctx.sendText("Hello world from Bao.js running on Railway!");
});

const server = app.listen({ port: port });
console.log(`Server listening on ${server.hostname}`);
