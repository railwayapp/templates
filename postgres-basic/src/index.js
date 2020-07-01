const pg = require("railway/pg");

pg.query("SELECT * FROM authors", (err, res) => {
  if (err) {
    console.log(err);
  }

  console.log(res.rows);
});

pg.close();
