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
    const newBack = await pool.query(
      "INSERT INTO back (description, rounds, reps, pr, prev) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [description, rounds, reps, pr, prev],
    );
    res.json(newBack.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allBacks = await pool.query("SELECT * FROM back");
    res.json(allBacks.rows);
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
    const updateBack = await pool.query(
      "UPDATE back SET description = $1, rounds = $2, reps = $3, pr = $4, prev = $5 WHERE back_id = $6",
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
    const deleteBack = await pool.query("DELETE FROM back WHERE back_id = $1", [
      id,
    ]);
    res.json("Exercise has been deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
