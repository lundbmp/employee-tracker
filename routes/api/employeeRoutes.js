const express = require("express");
const router = express.Router();
const db = require("../../config/connection");

// view all employees
router.get("/employees", (req, res) => {
  const sql = `SELECT * FROM employee`;

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

// add employee

// update employee role



module.exports = router;