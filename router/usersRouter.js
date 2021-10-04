const router = require('express').Router();
const Controller = require('./../controllers/users')
const auth = require('./../middlewares/auth')

router.post('/users/signup', Controller.signup)
router.post('/users/login', Controller.login)
router.get('/users/', auth.Authentication, auth.Authorization(['admin']),Controller.getAll)
router.get('/users/:updateId',auth.Authentication, auth.Authorization(["admin", "user"]), Controller.getId)
router.patch('/users/:updateId', auth.Authentication, auth.Authorization(['user']), Controller.patch)

module.exports = router;
