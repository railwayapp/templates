---
title: Laravel
description: A Laravel app that connects to a PostgreSQL database
tags:
  - php
  - laravel
  - postgresql
---

# Laravel Starter Example

This is a [Laravel](https://laravel.com/) starter app that connects to a Railway Postgres database.

[![Deploy on Railway Test](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Flaravel&plugins=postgresql)

## ✨ Features

- PHP
- Laravel
- Postgres

## 💁‍♀️ How to use

- [Create a Railway project with the Postgres plugin](https://railway.app/project?plugins=postgresql)
- Connect to your Railway project with `railway link`

## 📝 Notes

- **Plugin Config**: To connect to a Railway Plugin, Postgres for example, you will need to utilize the environment variables listed for that plugin in the [Railway Docs](https://docs.railway.app/).
  See the `.env.example` for an example of using these with Postgres.
- **APP_KEY**: This starter will automatically generate the `APP_KEY` (`php artisan key:generate` in the `Procfile`)
- **Migrations**: This starter automatically runs migrations on deploy (in the `Procfile`)
