const enginesRouter = require('express').Router()
const enginesControl = require('../controllers/engines')

enginesRouter.get('/engines',enginesControl.getAll)

module.exports = enginesRouter