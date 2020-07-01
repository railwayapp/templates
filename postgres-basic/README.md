# postgres-basic

## Usage

- Install dependencies `yarn install`
- Open the project in the Railway dashboard `yarn railway open`
- Run the code `yarn start`

You should see a list of posts from the db.

You can edit posts in Railway and they will be reflected.

So easy!

## Configuring your own project

The project that's currently setup is a dummy project. e.g: You're all editing the same data since this project hasn't been claimed by anybody.

To setup your own:

1. Delete the .railway/ directory
2. run `yarn run railway init`
3. Follow the prompts to either import a project from dashboard or create a new one.
4. On line 3 of index.js, change it from `SELECT * from posts` to `SELECT NOW()`.
5. `yarn railway open` to pop open your project
6. `yarn railway run src/index.js` to start running your server

Now you're operating on your own project. If you press Cmd + K in the dashboard, you can provision new plugins. Spoiler: Only postgres is supported ATM.
You can also type "dummy" and select "Generate Dummy Data" to prefill your tables with some dummy data
