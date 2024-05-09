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
    const newChest = await pool.query(
      "INSERT INTO chest (description, rounds, reps, pr, prev) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [description, rounds, reps, pr, prev],
    );
    res.json(newChest.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allChest = await pool.query("SELECT * FROM chest");
    res.json(allChest.rows);
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
    const updateChest = await pool.query(
      "UPDATE chest SET description = $1, rounds = $2, reps = $3, pr = $4, prev = $5 WHERE chest_id = $6",
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
    const deleteChest = await pool.query(
      "DELETE FROM chest WHERE chest_id = $1",
      [id],
    );
    res.json("Exercise has been deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
