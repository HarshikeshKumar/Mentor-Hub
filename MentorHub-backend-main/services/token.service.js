const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("../config");

const generateToken = (userId, expires, secret) => {
  const payload = {
    _id: userId,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret);
};

const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(
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
    config.jwt.verificationSecret
  );

  return verificationToken;
};

const verifyToken = async (token, secret) => {
  if (secret === "accessToken") {
    return await jwt.verify(token, config.jwt.accessSecret);
  } else if (secret === "verify") {
    return await jwt.verify(token, config.userVerification);
  }
};

module.exports = { generateAuthTokens, verifyToken, generateVerificationToken };
