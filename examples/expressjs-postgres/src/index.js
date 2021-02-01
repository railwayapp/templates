const express = require("express");
const pg = require("pg");

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT NOW()");
  res.send(`Hello, World! ${rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
