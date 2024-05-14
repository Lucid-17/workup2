const express = require("express");
const router = express.Router();
const pool = require("./db");

router.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const { rounds } = req.body;
    const { reps } = req.body;
    const { pr } = req.body;
    const { prev } = req.body;
    const newBiceps = await pool.query(
      "INSERT INTO biceps (description, rounds, reps, pr, prev) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [description, rounds, reps, pr, prev],
    );
    res.json(newBiceps.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allBiceps = await pool.query("SELECT * FROM biceps");
    res.json(allBiceps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const { rounds } = req.body;
    const { reps } = req.body;
    const { pr } = req.body;
    const { prev } = req.body;
    const updateBiceps = await pool.query(
      "UPDATE biceps SET description = $1, rounds = $2, reps = $3, pr = $4, prev = $5 WHERE id = $6",
      [description, rounds, reps, pr, prev, id],
    );
    res.json("Exercise has been updated!");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBiceps = await pool.query(
      "DELETE FROM biceps WHERE id = $1",
      [id],
    );
    res.json("Exercise has been deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
