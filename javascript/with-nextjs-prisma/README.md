# NextJS Postgres Example

This example is a [NextJS](https://nextjs.org/) app that connects to Postgres
database with [node-pg](https://www.npmjs.com/package/pg).

## How to use

- Create a Railway project with the Postgres plugin
- Connect to your Railway project with `railway init`
- Run this example with `railway dev`

## Notes

The SQL query being run simply fetches the current time in the database. It is located in `pages/api.time.js`
