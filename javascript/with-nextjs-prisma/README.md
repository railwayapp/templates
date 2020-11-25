# NextJS Prisma Example

This example is a [NextJS](https://nextjs.org/) todo app that uses prisma to
store todos in Postgres.

## ✨ Features

- Prisma
- NextJS
- Postgres

## 💁‍♀️ How to use

- Create a Railway project with the Postgres plugin
- Connect to your Railway project with `railway init`
- Migrate the database `railway run yarn migrate:up`
- Generate Prisma client `yarn generate`
- Run the NextJS app `railway run yarn dev`

## 📝 Notes

This app is a simple todo list where the data is persisted to Postgres. [Prisma
migrations](https://www.prisma.io/docs/concepts/components/prisma-migrate#prisma-migrate)
can be created with `railway run yarn migrate:save` and the database migrated
with `railway run yarn migrate:up`. The Prisma client can be regenerated with
`yarn generate`.

[swr](https://swr.vercel.app/) is used to fetch data on the client and perform optimistic updates.
