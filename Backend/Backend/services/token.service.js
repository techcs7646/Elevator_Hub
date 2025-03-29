const jwt = require("jsonwebtoken");
const moment = require("moment");
const configf = require("../config");
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
    configf.jwt.accessExpirationMinutes,
    "minutes"
  );
};
