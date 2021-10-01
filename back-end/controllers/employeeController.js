const { employee } = require("../models");

const addEmployeeAction = (req, res) => {
  employee
    .addEmployee(req.body)
    .then((message) => res.status(201).send(message))
    .catch((error) => res.status(401).send(error));
};

const updateEmployeeAction = (req, res) => {
  employee
    .updateEmployee(req.body)
    .then((message) => res.status(201).send(message))
    .catch((error) => res.status(401).send(error));
};

const listEmployee = (req, res) => {
  employee
    .findAll()
    .then((data) => res.send(data))
    .catch((error) => res.send(error));
};

const removeEmployeeAction = (req, res) => {
  employee
    .deleteEmployee(req.body)
    .then((data) => res.status(201).send(data))
    .catch((error) => res.status(401).send(error));
};
module.exports = {
  addEmployeeAction,
  listEmployee,
  removeEmployeeAction,
  updateEmployeeAction,
};
