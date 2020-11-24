# Redis Example

This example connects to a Redis database with
[node-redis](https://github.com/NodeRedis/node-redis).

## How to use

- Create a Railway project with the Redis plugin
- Connect to your Railway project with `railway init`
- Run this example with `railway start`

## Notes

In `src/index.js` we connect to a Redis database and create a string value with
the key "hello". We then display all keys in the database.

You can edit the Redis keys in the Railway dashboard.
