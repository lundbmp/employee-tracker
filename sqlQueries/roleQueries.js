const db = require("../config/connection");

// view all roles
function getRoles() {
  const sql = `SELECT r.*, d.name FROM role r
                LEFT JOIN department d ON r.department_id=d.id`;

  db.query(sql, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.table(rows);
  });
};

// add role
function addRole(roleObj){
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
  const params = [roleObj.title, roleObj.salary, roleObj.department_id];

  db.query(sql, params, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("you have added a role.");
  });
};

module.exports = {
  getRoles: getRoles,
  addRole: addRole
};
