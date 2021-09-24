---
title: ExpressJS Prisma
description: An ExpressJS server that uses Prisma to connect to a PostgreSQL database
tags:
  - express
  - postgresql
  - prisma
  - typescript
---

# ExpressJS Prisma Example

This is an [ExpressJS](https://expressjs.com/) REST API that uses [Prisma](https://www.prisma.io/) to connect to a Postgres database and CRUD todos.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fexpressjs-prisma&plugins=postgresql)

## ✨ Features

- Prisma
- Express
- Postgres
- TypeScript

## 💁‍♀️ How to use

- Install dependencies `yarn`
- [Provision a Postgres container on Railway](https://dev.new)
- Connect to your Railway project with `railway link`
- Migrate the database `railway run yarn migrate:dev`
- Run the Server app `railway run yarn dev`

## 📝 Notes

This is a simple REST API for todo items. The available routes are

- `GET /todos` gets all todos
- `POST /todos` creates a new using `text` in the JSON body
- `GET /todos/:id` gets a todo by id
- `PUT /todos/:id` updates a todo by id
- `DELETE /todos/:id` deletes a todo by id
