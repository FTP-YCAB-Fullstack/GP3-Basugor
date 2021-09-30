const enginesRouter = require('express').Router()
const enginesControl = require('../controllers/engines')

enginesRouter.get('/engines',enginesControl.getAll)
enginesRouter.get('/engines/:id',enginesControl.getDetail)


module.exports = enginesRouter