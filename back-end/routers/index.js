const express = require("express");

const router = express.Router();

const apiAuth = require("./authRouter");

router.use("/", apiAuth);

const apiEmployee = require("./employeeRouter");

router.use("/dashboard", apiEmployee);

module.exports = router;
