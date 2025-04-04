const UserModel = require("../models/user.model");
const getUserById = async (id) => {
  return await UserModel.findById(id);
};
const updateUser = async (id, data) => {
  return await UserModel.findByIdAndUpdate(id, data, { new: true });
};
const updateUserPhoto = async (id, photoURL) => {
  return await UserModel.findByIdAndUpdate(id, { photoURL }, { new: true });
};
const updateUserProfile = async (id, profileData) => {
  return await UserModel.findByIdAndUpdate(
    id,
    { profile: profileData },
    { new: true }
  );
};
module.exports = {
  getUserById,
  updateUser,
  updateUserPhoto,
  updateUserProfile,
};
