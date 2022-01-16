const joi = require('joi')
const username = joi.string().min(5).max(10).alphanum().required()
const password = joi.string().min(6).max(12).alphanum().required()
const code = joi.number().required()

module.exports.registrySchema = {
  body: {
    username,
    password,
    code,
  },
}
module.exports.loginSchema = {
  body: {
    username,
    password,
  },
}
