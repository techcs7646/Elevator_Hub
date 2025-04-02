const ApiError = require("../helper/apiError");
const mentorService = require("../services/mentor.service");
const httpStatus = require("../utils/httpStatus");
const getAllMentors = async (req, res, next) => {
  const mentors = await mentorService.getAllMentors();
  res.status(httpStatus.ok).json({
    success: true,
    mentors,
  });
};

const getMentorInfoByUsername = async (req, res, next) => {
  const { username } = req.params;
  const mentors = await mentorService.getMentorByUsername(username);
  if (mentor) {
    return next(new ApiError(httpStatus.notFound, "Mentor not found"));
  }
  res.status(httpStatus.ok).json({
    success: true,
    mentors,
  });
};

module.exports = {
  getAllMentors,
  getMentorInfoByUsername,
};
