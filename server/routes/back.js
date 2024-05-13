const express = require("express");
const router = express.Router();
const pool = require("./db");

router.post("/", async (req, res) => {
  try {
    const { description, rounds, reps, pr, prev } = req.body;
    const newBack = await pool.query(
      "INSERT INTO back (description, rounds, reps, pr, prev) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [description, rounds, reps, pr, prev],
    );
    res.status(201).json(newBack.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Failed to create exercise", error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allBacks = await pool.query("SELECT * FROM back");
    res.status(200).json(allBacks.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Failed to retrieve exercise", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, rounds, reps, pr, prev } = req.body;
    await pool.query(
      "UPDATE back SET description = $1, rounds = $2, reps = $3, pr = $4, prev = $5 WHERE id = $6",
      [description, rounds, reps, pr, prev, id],
    );
    res.status(200).json({ message: "Exercise has been updated!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Failed to update exercise", error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM back WHERE id = $1", [
      id
    ]);
    res.status(200).json({ message: "Exercise has been deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Failed to delete exercise", error: err.message })
  }
});

module.exports = router;
