const pg = require("railway/pg");

pg.query("SELECT * FROM posts", (err, res) => {
  if (err) {
    console.log(err);
  }

  console.log(res.rows);
});

pg.close();
