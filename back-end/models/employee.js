"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    static associate(models) {}

    static addEmployee = async ({ id_employee, username }) => {
      try {
        return Promise.resolve("Add Employee Success").then(
          this.create({
            id_employee,
            username,
          })
        );
      } catch (error) {
        return Promise.reject(error);
      }
    };

    static deleteEmployee = async ({ id_employee, username }) => {
      try {
        const employee = await this.findOne({
          where: { id_employee, username },
        });

        return Promise.resolve(employee).then(
          this.destroy({ where: { id_employee, username } })
        );
      } catch (error) {
        return Promise.reject(error);
      }
    };

    static updateEmployee = async ({ id_employee, username }) => {
      try {
        await this.update(
          {
            username,
          },
          { where: { id_employee } }
        );

        return Promise.resolve("Update Employee Success");
      } catch (error) {
        return Promise.reject(error);
      }
    };
  }
  employee.init(
    {
      id_employee: DataTypes.INTEGER,
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employee",
    }
  );
  ``;
  return employee;
};
