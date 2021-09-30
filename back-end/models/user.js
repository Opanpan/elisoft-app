"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {}

    static #encrypt = (password) => bcrypt.hashSync(password, 10);

    checkPassword = (password) => bcrypt.compareSync(password, this.password);

    static register = async ({ email, password }) => {
      try {
        const user = await this.findOne({ where: { email } });
        const encryptedPassword = this.#encrypt(password);

        if (user) {
          return Promise.resolve("Email already register");
        }

        return Promise.resolve("Register Success").then(
          this.create({
            email,
            password: encryptedPassword,
          })
        );
      } catch (error) {
        return Promise.reject(error);
      }
    };

    static userAuthenticate = async ({ email, password }) => {
      try {
        const user = await this.findOne({ where: { email } });

        if (!user || !user.checkPassword(password)) {
          return Promise.reject("Invalid username or password !!!");
        }

        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(error);
      }
    };
  }
  user.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
