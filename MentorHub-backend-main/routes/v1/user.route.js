const express = require("express");
const userController = require("../../controllers/user.controller");
const asyncHandler = require("../../helper/asyncHandler");
const authMiddleware = require("../../middleware/auth");
const upload = require("../../middleware/upload"); // Assuming you have an upload middleware
const validate = require("../../middleware/validate");
const {
  updateUserProfileValidation,
} = require("../../validations/user.validation");

const router = express.Router();

// ... other routes

router.post(
  "/upload-photo",
  authMiddleware.protect,
  upload.single("photo"), // Assuming 'photo' is the field name for the file
  asyncHandler(userController.uploadPhoto)
);

router.get("/", authMiddleware.protect, asyncHandler(userController.getUser));

router.put(
  "/update-profile",
  authMiddleware.protect,
  validate(updateUserProfileValidation),
  asyncHandler(userController.updateUserProfile)
);

module.exports = router;
