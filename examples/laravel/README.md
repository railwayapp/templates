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

- **Dockerfile**: The `Dockerfile` and associated files in `docker/` are based on [Laravel Sail PHP 8.0](https://github.com/laravel/sail/tree/1.x/runtimes/8.0)
- **Plugin Config**: To connect to a Railway Plugin, Postgres for example, you will need to utilize the environment variables listed for that plugin in the [Railway Docs](https://docs.railway.app/).
  See the `.env.example` for an example of using these with Postgres.
- **Web server port**: Railway dynamically assigns a port for your webserver. We grab the `$PORT` environment variable in `docker/start-container` to set this on Artisan `serve`
- **Logging**: Because the disk on Railway containers is ephemeral, we pipe the logs normally output to `storage/logs/laravel.log` to `stdout` [as seen here](https://github.com/sorrell/railavel/commit/2802b8c5032a13a601a903276ee2181678009f67)
- **APP_KEY**: This starter will automatically generate the `APP_KEY` (`php artisan key:generate` in the `docker/start-container`)
- **Migrations**: This starter automatically runs migrations on deploy (in the `docker/start-container`)
