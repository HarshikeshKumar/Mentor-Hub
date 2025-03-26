const express = require("express");
const mentorController = require("../../controllers/mentor.controller");
const asyncHandler = require("../../helper/asyncHandler");

const router = express.Router();

router.get(
  "/:username",
  asyncHandler(mentorController.getMentorInfoByUsername)
);

router.get("/", asyncHandler(mentorController.getAllMentors));

module.exports = router;
