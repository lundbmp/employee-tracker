const express = require("express");
const router = express.Router();
const db = require("../../config/connection");

// get all departments
router.get("/department", (req, res) => {
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
router.post("/department", ({ body }, res) => {
  const sql = `INSERT INTO department(name) VALUES (?)`;
  const params = [body.name];

  db.query(sql, params, (error, rows) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

module.exports = router;
