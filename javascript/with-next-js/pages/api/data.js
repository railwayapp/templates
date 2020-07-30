// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Call Railway anywhere on serverside code.
// Here or getInitialProps

import pg from "railway/pg";

export default async (req, res) => {
  try {
    const query = await pg.query("Select NOW()");
    res.json({
      data: {
        time: query.rows[0],
      },
    });
  } catch (e) {
    res.json({ error: e });
  }
};
