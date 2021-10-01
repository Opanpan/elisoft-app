const express = require("express");

const employee = express.Router();
const employeeController = require("../controllers/employeeController");

employee.post("/", employeeController.addEmployeeAction);
employee.get("/", employeeController.listEmployee);
employee.post("/delete", employeeController.removeEmployeeAction);
employee.post("/update", employeeController.updateEmployeeAction);

module.exports = employee;
