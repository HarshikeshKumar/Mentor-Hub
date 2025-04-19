const Joi = require("joi");

const initiateBookingValidation = Joi.object({
  serviceId: Joi.string().required(),
  dateAndTime: Joi.string().required(),
});

module.exports = {
  initiateBookingValidation,
};
