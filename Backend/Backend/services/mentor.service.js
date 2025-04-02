const UserModel = require("../models/user.model");
const serviceModel = require("../models/service.model");

const getAllMentors = async () => {
  return await UserModel.find({ role: "mentor" });
};

const getAllMentorById = async (id) => {
  return await UserModel.findOne({ _id: id, role: "mentor" });
};

const getMentorByUsername = async (username) => {
  const mentor = await UserModel.findOne({ username, role: "mentor" });
  if (!mentor) return null;
  console.log("Mentor found: ", mentor);
  return mentor;
};

module.exports = {
  getAllMentors,
  getMentorByUsername,
  getAllMentorById,
};
