const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string()
      .email()
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .required()
      .min(6)
  }
}
