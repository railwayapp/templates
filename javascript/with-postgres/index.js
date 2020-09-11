const pg = require("pg");

const pool = new pg.Pool();
(async () => {
  const res = await pool.query("SELECT NOW()");
  console.log(res.rows[0]);
  pool.end();
})();
