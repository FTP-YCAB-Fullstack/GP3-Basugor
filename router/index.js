const index = require("express").Router();
const enginesRouter = require("./enginesRouter");
const factoriesRouter = require("./factoriesRouter");
const motorcyclesRouter = require("./motorcyclesRouter");
const typesRouter = require("./typesRouter");
const usersRouter = require("./usersRouter");
const usersmotorRouter = require("./usersmotorRoute");

const auth = require('./../middlewares/auth')

const get3 = require('./../controllers/getAll')

index.get("/", (req, res) => {
  res.send("Router");
});

index.use(enginesRouter);
index.use(factoriesRouter);
index.use(motorcyclesRouter);
index.use(typesRouter);
index.use(usersRouter);
index.use(usersmotorRouter);

index.get('/collections', auth.Authentication, auth.Authorization(["admin", "user"]),get3)

module.exports = index;
