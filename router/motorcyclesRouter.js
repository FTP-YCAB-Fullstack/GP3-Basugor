const router = require('express').Router();
const auth = require('./../middlewares/auth')
const controller = require('./../controllers/motorcycles')

router.get('/motorcycles', auth.Authentication, auth.Authorization(["user", "admin"]), controller.getAll)
router.get('/motorcycles/:id', auth.Authentication, auth.Authorization(["user", "admin"]), controller.getDetail)
router.post('/motorcycles', auth.Authentication, auth.Authorization(["admin"]), controller.postMotor)
router.patch('/motorcycles/:id', auth.Authentication, auth.Authorization(["admin"]), controller.updateMotor)
router.delete('/motorcycles/:id', auth.Authentication, auth.Authorization(["admin"]), controller.deleteMotor)

module.exports = router;