const router = require('express').Router();
const Controller = require('./../controllers/users')
const auth = require('./../middlewares/auth')

router.post('/users/signup', Controller.signup)
router.post('/users/login', Controller.login)
router.get('/users/', auth.Authentication, auth.Authorization(['admin']),Controller.getAll)
router.get('/users/:id', Controller.getId)
router.patch('/users/:id', Controller.patch)

module.exports = router