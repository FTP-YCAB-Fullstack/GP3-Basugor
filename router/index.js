const index = require("express").Router();
const enginesRouter = require("./enginesRouter");
const fatctoryRouter = require("./factoriesRouter");
const motorcyclesRouter = require("./motorcyclesRouter");
const typesRouter = require("./typesRouter");
const usersRouter = require("./usersRouter");
const usersmotorRouter = require("./usersmotorRoute");

index.get("/", (req, res) => {
  res.send("Router");
});

index.use(enginesRouter);
index.use(fatctoryRouter);
index.use(motorcyclesRouter);
// index.use(typesRouter);
index.use(usersRouter);
index.use(usersmotorRouter);

module.exports = index;
