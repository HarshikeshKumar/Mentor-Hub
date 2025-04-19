const Joi = require("joi");

const timeSlotSchema = Joi.object({
  startTime: Joi.string().required(),
  endTime: Joi.string().required(),
});

const weeklyAvailabilitySchema = Joi.object({
  monday: Joi.array().items(timeSlotSchema).optional(),
  tuesday: Joi.array().items(timeSlotSchema).optional(),
  wednesday: Joi.array().items(timeSlotSchema).optional(),
  thursday: Joi.array().items(timeSlotSchema).optional(),
  friday: Joi.array().items(timeSlotSchema).optional(),
  saturday: Joi.array().items(timeSlotSchema).optional(),
  sunday: Joi.array().items(timeSlotSchema).optional(),
});

const createAvailabilityValidation = Joi.object({
  weeklyAvailability: weeklyAvailabilitySchema.required(),
  unavailableDates: Joi.array().items(Joi.date()).optional(),
});

module.exports = {
  createAvailabilityValidation,
};
