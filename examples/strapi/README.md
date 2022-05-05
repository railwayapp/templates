---
title: Strapi
description: A self-hosted version of strapi using a PostgreSQL database
buttonSource: https://github.com/railwayapp-starters/strapi/blob/main/README.md
tags:
  - strapi
  - postgresql
---

# Strapi example

This example is being maintained on the [railwayapp-starters](https://github.com/railwayapp-starters) organization and can be found [here](https://github.com/railwayapp-starters/strapi).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/strapi)

## ✨ Features

- Strapi
- Postgres

## 💁‍♀️ How to use

- Click the Railway button 👆
- Add the environment variables
  - If you do not add the Cloudinary related environment variables, your images/files will not be persisted between deploys.

## 📝 Notes

- After your app is deployed, visit the `/admin` endpoint to create your admin user.
- Railway's filesystem is ephemeral which is why any changes to the filesystem are not persisted between deploys. This is why, this example uses Cloudinary for storage.
