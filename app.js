const express = require("express");
const Router = require("./router");
const port = 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(Router);
app.listen(port, () => console.log(`server ready on port ${port}`));
