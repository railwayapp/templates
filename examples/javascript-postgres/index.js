const pg = require("pg");

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

const go = async () => {
  // Query the database
  const res = await pool.query("SELECT NOW()");

  // Print the result
  console.log(res.rows[0]);

  // Close the database connection
  pool.end();
};

go();
