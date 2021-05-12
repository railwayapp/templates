---
title: ExpressJS Mongoose
description: An ExpressJS server that connects to a MongoDB database
tags:
  - express
  - mongodb
  - mongoose
  - typescript
---

# ExpressJS Mongoose Example

This example starts an [ExpressJS](https://expressjs.com/) server that connects to a Railway MongoDB database using [MongooseJS](https://mongoosejs.com/)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fexpressjs-mongoose&plugins=mongodb)

## ✨ Features

- Express
- TypeScript
- MongoDB with Mongoose

## 💁‍♀️ How to use

- Install dependencies `yarn`
- Connect to your Railway project `railway link`
- Start the development server `railway run yarn dev`

## 📝 Notes

The starter contains a single `Country` model that you can read from and write to.

There are two main routes on the server:

- A `GET` route - `/countries` which returns all the countries
- A `POST` route - `/countries` which can be used to add a new country

Example post request to add a new country:

```
curl -H "Content-Type: application/json" \
  --request POST \
  -d '{"name":"India","iso2code":"IN"}' \
  http://localhost:3333/countries
```
