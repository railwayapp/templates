FROM denoland/deno:1.15.3

WORKDIR /app

USER deno

# Cache deps first
ADD deps.ts .
RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . .
RUN deno cache src/index.ts

CMD deno run --allow-net --allow-env src/index.ts
