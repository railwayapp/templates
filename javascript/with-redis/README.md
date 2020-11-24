# Redis Example

This example connects to a Postgres database with
[node-pg](https://www.npmjs.com/package/pg).

## How to use

- Create a Railway project with the Redis plugin
- Connect to your Railway project with `railway init`
- Run this example with `railway start`

## Notes

In `src/index.js` we connect to a Redis database and create a string value with
the key "hello". We then display all keys in the database.

You can edit the Redis keys in the Railway dashboard with `railway open`.
