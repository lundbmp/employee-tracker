const db = require("../config/connection");

// view all employees
function getEmployee() {
  const sql = `SELECT e.*, r.title, r.salary, d.name AS department_name, (SELECT CONCAT(e2.first_name,' ', e2.last_name) FROM employee e2 WHERE id = e.manager_id) AS manager 
                FROM employee e
                LEFT JOIN role r ON e.role_id=r.id
                LEFT JOIN department d ON r.department_id=d.id`;

  db.query(sql, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.table(rows);
  });
};

// add employee
function addEmployee(employeeObj) {
  const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
  const params = [
    employeeObj.first_name,
    employeeObj.last_name,
    employeeObj.role_id,
    employeeObj.manager_id,
  ];

  db.query(sql, params, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("you have added an employee");
  });
};

// update employee role
function updateEmployee(employeeObj){
  const params = [employeeObj.role_id, employeeObj.id];
  const sql = `UPDATE employee SET role_id = ?
                WHERE id = ?`;

  db.query(sql, params, (error, rows) => {
    if (error) {
      console.log(error);;
      return;
    }
    console.log("employee has been updated.");
  });
};

function allEmployees() {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.table(rows);
  });
}

module.exports = {
  getEmployee: getEmployee,
  addEmployee: addEmployee,
  updateEmployee: updateEmployee,
  allEmployees: allEmployees
};
