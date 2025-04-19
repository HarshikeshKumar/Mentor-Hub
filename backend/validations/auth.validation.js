const Joi = require("joi");

const signUpValidation = Joi.object().keys({
  name: Joi.string().required().trim(),
  username: Joi.string().required().trim(),
  email: Joi.string().required().email().trim(),
  password: Joi.string().required().min(8),
  role: Joi.string().valid("mentor", "student").required(),
  profile: Joi.object({
    expertise: Joi.array().items(Joi.string()).optional(),
    interests: Joi.array().items(Joi.string()).optional(),
    experience: Joi.string().optional(),
  }).optional(),
});

const signInValidation = Joi.object().keys({
  email: Joi.string().required().email().trim(),
  password: Joi.string().required(),
});

module.exports = {
  signUpValidation,
  signInValidation,
};
