const UserModel = require("../models/user.model");
const ApiError = require("../helper/apiError");
const httpStatus = require("../util/httpStatus");

const createUser = async (data) => {
  return await UserModel.create(data);
};

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await UserModel.findOne({ email }).select("+password");

  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.unauthorized, "Incorrect email or password");
  }

  return user;
};

module.exports = {
  createUser,
  loginUserWithEmailAndPassword,
};
