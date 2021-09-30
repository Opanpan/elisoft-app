const express = require("express");

const router = express.Router();

const apiAuth = require("./authRouter");

router.use("/", apiAuth);

module.exports = router;
