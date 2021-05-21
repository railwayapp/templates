---
title: Ghost
description: A self-hosted version of Ghost using a MySQL database
tags:
  - ghost
  - mysql
---

# Ghost example

This example deploys self-hosted version of [Ghost](https://ghost.org/). Internally it uses a MySQL database to store the data.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fghost&plugins=mysql&envs=CLOUDINARY_URL%2CMAILGUN_SMTP_LOGIN%2CMAILGUN_SMTP_PASSWORD&optionalEnvs=CLOUDINARY_URL%2CMAILGUN_SMTP_LOGIN%2CMAILGUN_SMTP_PASSWORD&CLOUDINARY_URLDesc=For+file+storage.+If+you+do+not+add+this%2C+your+images+won%27t+persist+between+deploys)

## ✨ Features

- Ghost
- MySQL

## 💁‍♀️ How to use

- Click the Railway button 👆
- Add the environment variables
  - If you do not add the `CLOUDINARY_URL` environment variable, your images/files will not be persisted between deploys.
  - Add the `MAILGUN_SMTP_LOGIN` and `MAILGUN_SMTP_PASSWORD` variables if you want to invite users to your admin panel or send emails to your subscribers when you publish a new post.

## 📝 Notes

- Railway's filesystem is ephemeral which is why any changes to the filesystem are not persisted between deploys. This is why, this example uses Cloudinary for storage.
- The above limitation also affects the way themes work with Ghost, we use the `bin/themes.sh` script to copy over the themes every time you deploy. That way, the theme is always present.
  - To add a theme, first add the package as a dependency to the `package.json` file and then add it to the list of themes in the `bin/themes.sh` file.
  - Do NOT add a theme directly using the Ghost UI, it will look like it worked but will break whenever you deploy your app again.
