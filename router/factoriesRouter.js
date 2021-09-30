const router = require("express").Router();
const Controller = require("../controllers/factories");

router.get("/factories", Controller.getAll);

module.exports = router;
