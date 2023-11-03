const route = require("express").Router();

route.post("/", (req, res) => {
  const { name } = req.body;
  res.status(200).send(`Name is ${name}`);
});

module.exports = route;
