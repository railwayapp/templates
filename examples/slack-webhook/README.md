---
title: Express Slack Webhook
description: An ExpressJS server with a POST request to emit a message on Slack
tags:
  - express
  - typescript
---

# Slack webhook starter

This example starts an [ExpressJS](https://expressjs.com/) server containing a post request to emit a message on Slack.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fstarters%2Ftree%2Fmaster%2Fexamples%2Fslack-webhook&envs=SLACK_WEBHOOK_URL)

## ✨ Features

- Express
- TypeScript
- Slack webhook route

## 💁‍♀️ How to use

- Create a Slack app with an [incoming webhook](https://api.slack.com/messaging/webhooks).
- Click the deploy button and add the `SLACK_WEBHOOK_URL`.
- Install dependencies `yarn`
- Connect to your Railway project `railway link`
- Start the development server `railway run yarn dev`

## 📝 Notes

The server started simply returns `Hello from the webhook! :rocket:`. You can consume whatever information you'd like from your custom webhook, parse it and send it to Slack accordingly.

You can read the documentation for formatting your messages [here](https://api.slack.com/reference/surfaces/formatting).
