const express = require("express");
const router = express.Router();
const db = require("../../config/connection");

// view all roles
router.get("/role", (req, res) => {
  const sql = `SELECT r.*, d.name FROM role r
                LEFT JOIN department d ON r.department_id=d.id`;

  db.query(sql, (error, rows) => {
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

// add role
router.post("/role", ({ body }, res) => {
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
  const params = [body.title, body.salary, body.department_id]

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
