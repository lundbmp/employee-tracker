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
    console.log("Success...\n" + rows);
  });
};

// add role
function addRole(body){
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
  const params = [body.title, body.salary, body.department_id];

  db.query(sql, params, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Success...\n" + rows);
  });
};

module.exports = {
  getRoles: getRoles(),
  addRole: addRole()
};
