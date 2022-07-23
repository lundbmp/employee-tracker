const express = require("express");
const router = express.Router();
const db = require("../../config/connection");

// view all roles
router.get("/roles", (req, res) => {
  const sql = `SELECT * FROM role`;

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

// add role



module.exports = router;