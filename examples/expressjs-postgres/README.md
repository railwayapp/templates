---
title: ExpressJS Postgres
description: An ExpressJS server that connects to a PostgreSQL database
tags:
  - express
  - postgresql
  - typescript
---

# ExpressJS Postgres Example

This example starts an [ExpressJS](https://expressjs.com/) server that connects
to a Railway PostgreSQL database.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fexpressjs-postgres&plugins=postgresql)

## ✨ Features

- Postgres
- Express
- TypeScript

## 💁‍♀️ How to use

- Install dependencies `yarn`
- [Create a Railway project with the Postgres plugin](https://dev.new)
- Connect to your Railway project `railway link`
- Start the server `railway run yarn dev`

## 📝 Notes

The server started simply returns the current time in the database. The SQL
query is located in `src/index.js`.
