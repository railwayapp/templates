const pg = require("pg");
const client = new pg.Pool();

client.query("SELECT now()", (err, res) => {
  if (err) {
    console.log(err);
  }

  console.log(res.rows);
});

client.close();
