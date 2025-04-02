const userService = require("../services/auth.service");
const httpStatus = require("../utils/httpStatus");
const tokenService = require("../services/token.service");
const signUp = async (req, res) => {
  const { name, email, password, username, role } = req.body;
  const user = await userService.createUser({
    name,
    email,
    username,
    password,
    role,
  });
  user.password = undefined;
  return res.status(httpStatus.created).json({
    message: "Account Created Successfully",
    user,
  });
};
const signIn = (req, res) => {};
module.exports = { signIn, signUp };
