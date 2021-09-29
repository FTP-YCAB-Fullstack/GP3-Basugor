const router = require('express').Router();
const Controller = require('./../controllers/users')

router.post('/users/signup', Controller.signup)

module.exports = router