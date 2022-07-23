const db = require("../config/connection");

// view all employees
function getEmployees() {
  const sql = `SELECT e.*, r.title, r.salary, d.name, (SELECT CONCAT(e2.first_name,' ', e2.last_name) FROM employee e2 WHERE id = e.manager_id) AS manager 
                FROM employee e
                LEFT JOIN role r ON e.role_id=r.id
                RIGHT JOIN department d ON r.department_id=d.id`;

  db.query(sql, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Success...\n" + rows);
  });
};

// add employee
function addEmployee(body) {
  const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id,
  ];

  db.query(sql, params, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Success...\n" + rows);
  });
};

// update employee role
function updateEmployee(id, role_id){
  const params = [id, role_id];
  const sql = `UPDATE employee SET role_id = ?
                WHERE id = ?`;

  db.query(sql, params, (error, rows) => {
    if (error) {
      console.log(error);;
      return;
    }
    console.log("Success...\n" + rows);
  });
};

module.exports = {
  getEmployees: getEmployees(),
  addEmployee: addEmployee(),
  updateEmployees: updateEmployee() 
};
