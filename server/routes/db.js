const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "D_fLYUZwm9e3DY!",
  host: "localhost",
  port: 5432,
  database: "workup",
});

module.exports = pool;
