// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Call Railway anywhere on serverside code.
// Here or getInitialProps

import { promisify } from "util";
import pg from "pg";

export default async (req, res) => {
  try {
    const client = pg.Pool();
    const query = await promisify(client.query)("Select NOW()");
    res.json({
      data: {
        time: query.rows[0].now,
      },
    });
  } catch (e) {
    console.log("ERROR", e);
    res.json({ error: e });
  }
};
