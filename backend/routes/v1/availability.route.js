const express = require("express");
const {
  createAvailabilityValidation,
} = require("../../validations/availability.validation");
const availabilityController = require("../../controllers/availability.controller");
const asyncHandler = require("../../helper/asyncHandler");
const validate = require("../../middleware/validate");
const authMiddleware = require("../../middleware/auth");

const router = express.Router();

router.post(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  validate(createAvailabilityValidation),
  asyncHandler(availabilityController.createAvailability)
);

router.get(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(availabilityController.getAvailability)
);

router.get(
  "/:mentorId",
  authMiddleware.protect,
  asyncHandler(availabilityController.getNext14DaysAvailability)
);

module.exports = router;
