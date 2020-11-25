# Mongo Example

This example connects to a Mongo database with
[mongoose](https://mongoosejs.com/).

## How to use

- Create a Railway project with the Mongo plugin
- Connect to your Railway project with `railway init`
- Run this example with `railway start`

## Notes

In `src/index.js` we connect to a Mongo database with mongoose and create a Cat
model. We then create a cat with a [random cat
name](https://www.npmjs.com/package/cat-names). Finally, all the cats in the
database are listed.

You can edit the Cat collection in the Railway dashboard with `railway open`.
