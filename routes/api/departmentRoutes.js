const express = require("express");
const router = express.Router();
const db = require("../../config/connection");

// get all departments
router.get("/departments", (req, res) => {
  const sql = `SELECT * FROM department`;

  db.query(sql, (error, rows) => {
    if (error) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// add department



module.exports = router;