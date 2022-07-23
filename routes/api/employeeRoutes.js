const express = require("express");
const router = express.Router();
const db = require("../../config/connection");

// view all employees
router.get("/employee", (req, res) => {
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
router.post("/employee", ({ body }, res) => {
  const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

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

// update employee role

module.exports = router;
