const db = require("./config/connection");
const role = require("./sqlQueries/roleQueries");
const employee = require("./sqlQueries/employeeQueries");
const department = require("./sqlQueries/departmentQueries");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

// connect to database THEN start server
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected...");
});

function promptStart() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Exit",
        ],
      },
    ])
    .then((result) => {
      switch (result.menu) {
        case "View All Employees":
          employee.getEmployee();
          setTimeout(() => {
            promptStart();
          }, 1000);
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployee();
          break;
        case "View All Roles":
          role.getRoles();
          setTimeout(() => {
            promptStart();
          }, 1000);
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          department.getDepartment();
          setTimeout(() => {
            promptStart();
          }, 1000);
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Exit":
          console.log("Goodbye.");
          db.end();
      }
    });
}

promptStart();

function addEmployee() {
  role.getRoles();
  setTimeout(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is your employees first name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your first name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "last_name",
          message: "What is your employees last name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your last name!");
              return false;
            }
          },
        },
        {
          type: "number",
          name: "role_id",
          message: "What role id does your employee need?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your role id!");
              return false;
            }
          },
        },
        {
          type: "number",
          name: "manager_id",
          message: "Who is your manager id?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a manager id!");
              return false;
            }
          },
        },
      ])
      .then((data) => {
        employee.addEmployee(data);
        setTimeout(() => {
          promptStart();
        }, 1000);
      });
  }, 1000);
}

function updateEmployee() {
  employee.allEmployees();
  setTimeout(() => {
    inquirer
      .prompt([
        {
          type: "number",
          name: "id",
          message:
            "What is the employee id of the employee you want to update?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a employee id!");
              return false;
            }
          },
        },
        {
          type: "number",
          name: "role_id",
          message: "What is their new role id?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a new role id!");
              return false;
            }
          },
        },
      ])
      .then((data) => {
        employee.updateEmployee(data);
        setTimeout(() => {
          promptStart();
        }, 1000);
      });
  }, 1000);
}

function addRole() {
    setTimeout(() => {
        inquirer
          .prompt([
            {
              type: "input",
              name: "title",
              message: "What is the title of your new role?",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a role name!");
                  return false;
                }
              },
            },
            {
              type: "number",
              name: "salary",
              message: "What is the salary for this role?",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a salary!");
                  return false;
                }
              },
            },
            {
              type: "number",
              name: "department_id",
              message: "What is the department id for this role?",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a department id!");
                  return false;
                }
              },
            },
          ])
          .then((data) => {
            role.addRole(data);
            setTimeout(() => {
              promptStart();
            }, 1000);
          });
      }, 1000);
}

function addDepartment() {
    setTimeout(() => {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the name of your new department?",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter in a department name!");
                  return false;
                }
              },
            }
          ])
          .then((data) => {
            department.addDepartment(data);
            setTimeout(() => {
              promptStart();
            }, 1000);
          });
      }, 1000);
}