const db = require("../config/connection");

// get all departments
function getDepartments(){
  const sql = `SELECT * FROM department`;

  db.query(sql, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Success...\n" + rows);
  });
};

// add department
function addDepartment(departmentName) {
  const sql = `INSERT INTO department(name) VALUES (?)`;
  const params = departmentName;

  db.query(sql, params, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Success...\n" + rows);
  });
};

module.exports = {
  getDepartments: getDepartments(),
  addDepartment: addDepartment()
};
