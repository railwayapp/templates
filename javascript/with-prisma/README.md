# with-prisma

This example uses [Prisma](https://www.prisma.io/) to access and interact with the Railway PostgreSQL database.

## Usage

- Install dependencies `yarn install`
- Init a Railway project `yarn railway init`
- Generate Prisma `yarn generate`
- Open the project in the Railway dashboard `yarn railway open`
- Run the code `yarn start`

Optionally, run `yarn migrate:up` to create a Users and Posts folder and follow Prisma's [Quickstart](https://www.prisma.io/docs/getting-started/quickstart/)!

## Prisma support

Prisma has fantastic TypeScript support. If you open `src/index.ts` in an editor like VSCode, you will get autocompletion and type hints when querying the database.

All of Prisma features are supported. [Prisma documentation can be found here]([More information](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/).

You can edit the Prisma schema at `prisma/schema.prisma`. After editing you can run

```
yarn migrate:save
yarn migrate:up
```

to create new migrations and run them against the database.

You should also run `yarn generate` to create updated type definitions for the Prisma client.
