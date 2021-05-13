---
title: NextJS Auth
description: A NextJS app using NextAuth.js for authentication with a MongoDB database
tags:
  - next
  - nextauth.js
  - mongodb
  - javascript
---

# NextJS Auth Example

The example is a [NextJS](https://nextjs.org/) app with authentication using [NextAuth.js](https://next-auth.js.org/).

It uses [MongoDB](https://www.mongodb.com/) to persist user accounts and support email sign in. Adding additional providers is as simple as commenting them out from `/pages/api/auth/[...nextauth].js`.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fnextjs-auth-mongo&plugins=mongodb&envs=NEXTAUTH_URL%2CSECRET%2CEMAIL_FROM%2CEMAIL_SERVER&NEXTAUTH_URLDesc=The+canonical+URL+of+your+site&SECRETDesc=A+random+string+used+to+hash+tokens%2C+sign+cookies+and+generate+crytographic+keys&NEXTAUTH_URLDefault=http%3A%2F%2Flocalhost%3A3000&EMAIL_FROMDefault=NextAuth+%3Cnoreply%40example.com%3E)

## ✨ Features

- NextJS
- NextAuth.js
- MongoDB

## 💁‍♀️ How to use

- Click the `Deploy on Railway` button above
- Add the required environment variables (`SECRET`, `EMAIL_SERVER`)
  - The `EMAIL_SERVER` has to be a connection string in this format - `smtp://username:password@smtp.example.com:587`
- Clone the project locally
- Install dependencies - `yarn`
- Connect to your Railway project - `railway link`
- Start the development server `railway run yarn dev`

## 📝 Notes

- The value for `NEXTAUTH_URL` is set to `http://localhost:3000` for ease of use. You must update it before deploying to production.
- You can read more about how the email provider works [here](https://next-auth.js.org/providers/email).
- You can read more about how objects are stored in the database [here](https://next-auth.js.org/schemas/mongodb).
- If you want to configure additional providers, you can do so using the information mentioned [here](https://next-auth.js.org/configuration/providers).
