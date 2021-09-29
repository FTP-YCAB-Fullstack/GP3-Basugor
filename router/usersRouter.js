const router = require('express').Router();
const Controller = require('./../controllers/users')

router.post('/users/signup', Controller.signup)
router.post('/users/login', Controller.login)
router.get('/users/', Controller.getall)
router.get('/users/:id', Controller.getId)
router.patch('/users/:id', Controller.patch)

module.exports = router