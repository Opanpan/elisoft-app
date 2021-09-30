const express = require("express");

const auth = express.Router();
const authController = require("../controllers/authController");

auth.post("/register", authController.registerAction);
auth.post("/login", authController.loginAction);

module.exports = auth;
