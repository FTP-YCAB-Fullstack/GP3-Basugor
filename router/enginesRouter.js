const enginesRouter = require('express').Router()
const enginesControl = require('../controllers/engines')
const auth = require('./../middlewares/auth')

enginesRouter.get('/engines', auth.Authentication, auth.Authorization(["user", "admin"]),enginesControl.getAll)
enginesRouter.get('/engines/:id', auth.Authentication, auth.Authorization(["user", "admin"]),enginesControl.getDetail)
enginesRouter.post('/engines', auth.Authentication, auth.Authorization(["admin"]),enginesControl.postEngine)
enginesRouter.patch('/engines/:id', auth.Authentication, auth.Authorization(["admin"]),enginesControl.patchEngine)
enginesRouter.delete('/engines/:id', auth.Authentication, auth.Authorization(["admin"]),enginesControl.deleteEngine)


module.exports = enginesRouter