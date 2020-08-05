# serverless

This project is intended to be deployed on Vercel, Netlify, etc

It makes use of a railway build command which should only be used in production, during the build, on those sites

It is NOT intended for local use, and requires a production access token

If you are not planning to deploy to Vercel, Netlify, etc, please just use any of the regular library templates since they'll have no prioriatary railway library lockin' (And will work with all your Postgres/Mongo/etc libraries out of the box)

## Usage

- Install dependencies `yarn install`
- Init a railway project `yarn railway init`
- Open the project in the Railway dashboard `yarn railway open`
- Run the code `yarn start`

The time should be printed

So easy!

## Configuring your own project
