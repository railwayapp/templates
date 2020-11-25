# Prisma Example

This example uses [Prisma](https://www.prisma.io/) to access and interact with
the Railway PostgreSQL database.

## ✨ Features

- Postgres
- Prisma
- NodeJS
- TypeScript

## 💁‍♀️ How to use

- Create a Railway project with the Postgres plugin
- Connect to your Railway project with `railway init`
- Migrate the database `railway run yarn migrate:up`
- Generate Prisma client `yarn generate`

This example is a very basic CLI that can create and get items with Prisma.

- Create an item with `railway run yarn start create [value]`
- List all items with `railway run yarn start list`

## Prisma support

Prisma has fantastic TypeScript support. If you open `src/index.ts` in an editor
like VSCode, you will get autocompletion and type hints when querying the
database.

All of Prisma features are supported. [Prisma documentation can be found
here]([More
information](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/).

You can edit the Prisma schema at `prisma/schema.prisma`. After editing you can
run

```shell
yarn migrate:save
yarn migrate:up
```

to create new migrations and run them against the database.

You should also run `yarn generate` to create updated type definitions for the
Prisma client.
