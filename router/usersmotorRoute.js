const usersmotorRouter = require("express").Router();
const usersmotorControl = require("../controllers/usersmotor");
const auth = require("../middlewares/auth")

// usersmotorRouter.get("/users/:userId/motors", usersmotorControl.getAll);
usersmotorRouter.post("/users/:userId/motors", usersmotorControl.post);
usersmotorRouter.delete("/users/:userId/motors/:motorId", usersmotorControl.deleteMotor);
usersmotorRouter.patch("/users/:userId/motors/:motorId", usersmotorControl.patch);

module.exports = usersmotorRouter;
