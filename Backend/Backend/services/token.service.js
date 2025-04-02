const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("../config");
const generateToken = (userId, expires, secret) => {
  const payLoad = {
    _id: userId,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payLoad, secret);
};
const generateAuthToken = async (user) => {
  const accessTokenExpires = moment.add(
    config.jwt.accessExpirationMinutes,
    "minutes"
  );
  const accessToken = generateToken(
    user._id,
    accessTokenExpires,
    config.jwt.accessSecret
  );
  return accessToken;
};
const generateVerificationToken = async (userId) => {
  const verificationTokenExpires = moment().add(
    config.jwt.verificationExpirationMinutes,
    "minutes"
  );
  const verificationToken = generateToken(
    userId,
    verificationTokenExpires,
    config.jwt.verificationExpirationMinutes
  );
  return verificationToken;
};
const verifyToken = async (tokens, secret) => {
  if (secret === "accessToken") {
    return await jwt.verify(tokens, config.jwt.accessSecret);
  } else if (secret === "verify") {
    return await jwt.verify(tokens, config.jwt.verifictionSecret);
  }
};
module.exports = { generateAuthToken, verifyToken, generateVerificationToken };
