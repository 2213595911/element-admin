const express = require('express')
const router = express.Router()
const { User } = require('../models')
const { registrySchema, loginSchema } = require('../schema/user')
const expressJoi = require('@escook/express-joi')
const user = require('../controller/userController')

router.get('/list', user.getUserList.bind(user))
router.get('/getcode', user.getCode.bind(user))
router.post('/registry', expressJoi(registrySchema), user.registry.bind(user))
router.post('/login', expressJoi(loginSchema), user.login.bind(user))
module.exports = router
