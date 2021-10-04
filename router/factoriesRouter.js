const router = require("express").Router();
const Controller = require("../controllers/factories");
const auth = require('../middlewares/auth')

router.get("/factories", auth.Authentication, auth.Authorization(["user", "admin"]),Controller.getAll);
router.get("/factories/:factoryId",auth.Authentication, auth.Authorization(["user", "admin"]), Controller.getId);
router.post("/factories", auth.Authentication, auth.Authorization(["admin"]), Controller.post);
router.patch("/factories/:id", auth.Authentication, auth.Authorization(["admin"]), Controller.patch);
router.delete("/factories/:id", auth.Authentication, auth.Authorization(["admin"]), Controller.deleteFactories);

module.exports = router;
