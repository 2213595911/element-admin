const joi = require('joi')

const title = joi.string().required()
const body = joi.string().required()

module.exports.articleSchema = {
  body: {
    title,
    body,
  },
}
