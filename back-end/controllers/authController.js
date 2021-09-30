const { user } = require("../models");

const registerAction = (req, res) => {
  user
    .register(req.body)
    .then((message) => res.status(201).send(message))
    .catch((error) => res.status(400).send(error));
};

const loginAction = (req, res) => {
  user
    .userAuthenticate(req.body)
    .then((user) => {
      res.json({
        auth: true,
        user,
      });
    })
    .catch((error) => res.send(error));
};

module.exports = { registerAction, loginAction };
