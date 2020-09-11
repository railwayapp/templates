const pg = require("railway/pg");

pg.query("SELECT now()", (err, res) => {
  if (err) {
    console.log(err);
  }

  console.log(res.rows);
});

pg.close();
