// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Use Railway Postgres anywhere in the API routes or in getServerSideProps

import pg from "pg";

const client = new pg.Pool();

export default async (req, res) => {
  try {
    const query = await client.query("SELECT NOW()");

    res.json({
      time: query.rows[0].now,
    });
  } catch (e) {
    console.log("ERROR", e);
    res.json({ error: e });
  }
};
