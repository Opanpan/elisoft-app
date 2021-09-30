const express = require("express");

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routers");

app.use(router);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
