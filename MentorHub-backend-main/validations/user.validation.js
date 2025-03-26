const Joi = require("joi");

const updateUserProfileValidation = Joi.object({
  tags: Joi.array().items(Joi.string()).optional(),
  title: Joi.string().optional(),
  bio: Joi.string().optional(),
  social: Joi.object({
    linkedin: Joi.string().optional(),
    github: Joi.string().optional(),
    twitter: Joi.string().optional(),
    facebook: Joi.string().optional(),
    instagram: Joi.string().optional(),
  }).optional(),
  college: Joi.string().optional(),
});

module.exports = {
  updateUserProfileValidation,
};
