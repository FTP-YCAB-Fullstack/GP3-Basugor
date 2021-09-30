const typeRouter = require('express').Router();
const typeController = require('../controllers/types');
const auth = require("../middlewares/auth");

typeRouter.get('/types', typeController.getAll)

module.exports = typeRouter;