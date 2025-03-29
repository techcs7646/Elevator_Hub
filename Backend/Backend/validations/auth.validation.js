const joi = require("joi");
const signUpValidation = joi.object.keys({
  name: joi.string().required().trim(),
  username: joi.string().required().trim(),
  email: joi.string().required().trim(),
  password: joi.string().required().min(8),
  role: joi.string().valid("mentor", "student").required(),
});
const signInValidation = joi.object.keys({
  email: joi.string().required().trim(),
  password: joi.string().required(),
});
module.exports = { signInValidation, signUpValidation };
