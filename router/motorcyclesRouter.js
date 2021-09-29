const router = require('express').Router();
const auth = require('./../middlewares/auth')
const controller = require('./../controllers/motorcycles')

router.get('/motorcycles', controller.getAll)
router.post('/motorcycles', controller.postMotor)
router.get('/motorcycles/:id', controller.getDetail)
router.patch('/motorcycles/:id', controller.updateMotor)
router.delete('/motorcycles/:id', controller.deleteMotor)

module.exports = router;