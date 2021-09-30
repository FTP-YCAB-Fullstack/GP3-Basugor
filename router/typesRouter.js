const typeRouter = require('express').Router();
const typeController = require('../controllers/types');
const auth = require("../middlewares/auth");

typeRouter.get('/types', typeController.getAll);
typeRouter.get('/types/:id', typeController.getDetail);
typeRouter.post('/types', typeController.postTypes);
typeRouter.patch('/types/:id', typeController.patchType);
typeRouter.delete('/types/:id', typeController.deleteType);

module.exports = typeRouter;