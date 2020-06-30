const pg = require("railway/pg");

pg.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log(err);
  }

  console.log(res);
});

pg.close();
