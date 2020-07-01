# with-prisma-basic

This example uses [Prisma](https://www.prisma.io/) to access and interact with the Railway PostgreSQL database.

## Usage

- Install dependencies `yarn install`
- Open the project in the Railway dashboard `yarn railway open`
- Run the code `yarn start`

You should see a list of users and posts from the db.

You can edit posts in Railway and they will be reflected.

So easy!

## Configuring your own project

The project that's currently setup is a dummy project. e.g: You're all editing the same data since this project hasn't been claimed by anybody.

To setup your own:

1. Delete the .railway/ directory
2. run `yarn run railway init`
3. Follow the prompts to either import a project from dashboard or create a new one.
4. Run `yarn run migrate:up` to run the migrations against the new database

Now you're operating on your own project. If you press Cmd + K in the dashboard, you can provision new plugins. Spoiler: Only postgres is supported ATM.
You can also type "dummy" and select "Generate Dummy Data" to prefill your tables with some dummy data

## Prisma support

Prisma has fantastic TypeScript support. If you open `src/index.ts` in an editor like VSCode, you will get autocompletion and type hints when querying the database.

All of Prisma features are supports. [Prisma documentation can be found here]([More information](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/).

You can edit the Prisma schema at `prisma/schema.prisma`. After editing you can run

```
yarn migrate:save
yarn migrate:up
```

to create new migrations and run them against the database.

You should also run `yarn generate` to create updated type definitions for the Prisma client.
