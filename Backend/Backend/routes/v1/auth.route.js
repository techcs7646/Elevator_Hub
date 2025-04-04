const express = require("express");
const authController = require("../../controllers/auth.controller");
const validate = require("../../middleware/validate");
const asyncHandler = require("../../helper/asyncHandler");

const {
  signInValidation,
  signUpValidation,
} = require("../../validations/auth.validation");
const router = express.Router();
router.post(
  "/signup",
  validate(signUpValidation),
  asyncHandler(authController.signUp)
);
router.post(
  "/signin",
  validate(signInValidation),
  asyncHandler(authController.signIn)
);
module.exports = router;
