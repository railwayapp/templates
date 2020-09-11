// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Call Railway anywhere on serverside code.
// Here or getInitialProps

import pg from "railway/pg";
import { promisify } from "util";

export default async (req, res) => {
  try {
    const query = await promisify(pg.query)("Select NOW()");
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
