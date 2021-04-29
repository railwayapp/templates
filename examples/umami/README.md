# Umami example

This example deploys self-hosted version of [Umami](https://umami.is/). Internally it uses a PostgreSQL database to store the collected data.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fumami&plugins=postgresql&envs=HASH_SALT&HASH_SALTDesc=Any+random+string+used+to+generate+unique+values+for+your+installation)

## ✨ Features
- NextJS
- Umami
- PostgreSQL

## 💁‍♀️ How to use

- Click the Railway button 👆
- Clone the repo and connect to your project using `railway link`
- Use `railway run psql -h hostname -U username -d databasename -f sql/schema.postgresql.sql`
  - You can view your `hostname`, `username`, and `databasename` using `railway variables` or from your project dashboard
  - This command installs all the tables with the required scripts and creates a login account with the username `admin` and password `umami`
- You should now be able to visit your Umami dashboard and set up sites that you want to track analytics for
  - You can find the URL in your project dashboard which you can visit by running `railway open`

## 📝 Notes
- Make sure you [change your password](https://umami.is/docs/login) after you log in for the first time
- Read more about [adding a website](https://umami.is/docs/add-a-website) and [collecting data](https://umami.is/docs/collect-data) here
