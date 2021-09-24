---
title: Hasura
description: A Hasura instance with a PostgreSQL database
tags:
  - postgresql
  - hasura
---

# Hasura example

This example sets up a [Hasura](https://hasura.io/opensource/) instance with a [PostgreSQL](https://www.postgresql.org/) database.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fhasura&plugins=postgresql&envs=HASURA_GRAPHQL_ADMIN_SECRET&HASURA_GRAPHQL_ADMIN_SECRETDesc=To+secure+your+GraphQL+endpoint+and+the+Hasura+console.)

## ✨ Features

- Postgres
- Hasura

## 💁‍♀️ How to use

- Click the `Deploy on Railway` button
- Set up a `HASURA_GRAPHQL_ADMIN_SECRET` to secure your endpoints and console.
- Visit your console after the deployment is complete

## 📝 Notes

- This starter automagically provisions a PostgreSQL database for you when you click the `Deploy on Railway`. The `DATABASE_URL` enviroment variable used in the `Dockerfile` is picked up from there.
- The Hasura console and dev mode are enabled by default for a better development experience. You may want to read the [production checklist](https://hasura.io/docs/latest/graphql/core/deployment/production-checklist.html) before going live with your app.
