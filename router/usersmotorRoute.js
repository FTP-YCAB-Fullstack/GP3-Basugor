const usersmotorRouter = require("express").Router();
const usersmotorControl = require("../controllers/usersmotor");
const auth = require("../middlewares/auth");

// usersmotorRouter.get("/users/:userId/motors", usersmotorControl.getAll);
usersmotorRouter.post(
  "/users/:userId/motors",
  auth.Authentication,
  auth.Authorization(["user"]),
  usersmotorControl.post
);
usersmotorRouter.delete(
  "/users/:userId/motors/:motorId",
  auth.Authentication,
  auth.Authorization(["user"]),
  usersmotorControl.deleteMotor
);
usersmotorRouter.patch(
  "/users/:userId/motors/:motorId",
  auth.Authentication,
  auth.Authorization(["user"]),
  usersmotorControl.patch
);

module.exports = usersmotorRouter;
