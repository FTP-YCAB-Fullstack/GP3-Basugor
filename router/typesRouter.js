const typeRouter = require('express').Router();
const typeController = require('../controllers/types');
const auth = require("../middlewares/auth");

typeRouter.get('/types', auth.Authentication, auth.Authorization(['admin', 'user']), typeController.getAll);
typeRouter.get('/types/:id', auth.Authentication, auth.Authorization(['admin', 'user']), typeController.getDetail);
typeRouter.post('/types', auth.Authentication, auth.Authorization(['admin']), typeController.postTypes);
typeRouter.patch('/types/:id', auth.Authentication, auth.Authorization(['admin']), typeController.patchType);
typeRouter.delete('/types/:id', auth.Authentication, auth.Authorization(['admin']), typeController.deleteType);

module.exports = typeRouter;