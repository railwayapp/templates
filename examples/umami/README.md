---
title: Umami
description: A self-hosted version of Umami using a PostgreSQL database
tags:
  - nextjs
  - umami
  - postgresql
  - analytics
---

# Umami example

To provide the latest version of Umami, we deploy the code maintained by the [Umami](https://umami.is/) team. You can find the source code [here](https://github.com/mikecao/umami).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/umami)

## ✨ Features

- Umami
- PostgreSQL

## 💁‍♀️ How to use

- Click the Railway button 👆
- Add the `HASH_SALT` environment variable and deploy.
- Clone the project Railway created for you using Git and link your local repo to the Railway project using the [CLI](https://docs.railway.app/develop/cli).
- Use `railway run psql -h hostname -U username -d databasename -f sql/schema.postgresql.sql` to add all the tables and create the default admin user.
  - You can view your `hostname`, `username`, and `databasename` using `railway variables` or from your project dashboard.
  - The default account has the username `admin` and password `umami`. Make sure you change the password after your first login.
- You should now be able to use the Umami dashboard and add the websites you'd like to track.

## 📝 Notes

- Make sure you [change your password](https://umami.is/docs/login) after you log in for the first time.
- Read more about [adding a website](https://umami.is/docs/add-a-website) and [collecting data](https://umami.is/docs/collect-data).
