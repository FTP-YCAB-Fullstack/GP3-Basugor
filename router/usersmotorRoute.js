const usersmotorRouter = require("express").Router();
const usersmotorControl = require("../controllers/usersmotor");
const auth = require("../middlewares/auth");

// usersmotorRouter.get("/users/:userId/motors", usersmotorControl.getAll);
usersmotorRouter.post(
  "/users/:updateId/motorcycles",
  auth.Authentication,
  auth.Authorization(["user"]),
  usersmotorControl.post
);

usersmotorRouter.delete(
  "/users/:updateId/motorcycles/:motorId",
  auth.Authentication,
  auth.Authorization(["user"]),
  usersmotorControl.deleteMotor
);

module.exports = usersmotorRouter;
