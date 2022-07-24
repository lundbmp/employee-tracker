const db = require("../config/connection");

// get all departments
function getDepartment(){
  const sql = `SELECT * FROM department`;

  db.query(sql, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.table(rows);
  });
};

// add department
function addDepartment(departmentObj) {
  const sql = `INSERT INTO department(name) VALUES (?)`;
  const params = departmentObj.name;

  db.query(sql, params, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("you have added a department");
  });
};

module.exports = {
  getDepartment: getDepartment,
  addDepartment: addDepartment
};
