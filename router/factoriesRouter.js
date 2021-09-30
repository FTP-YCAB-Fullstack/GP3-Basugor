const router = require("express").Router();
const Controller = require("../controllers/factories");

router.get("/factories", Controller.getAll);
router.get("/factories/:factoryId", Controller.getId);
router.post("/factories", Controller.post);
router.patch("/factories/:id", Controller.patch);
router.delete("/factories/:id", Controller.deleteFactories);

module.exports = router;
