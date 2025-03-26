const ServiceModel = require("../models/service.model");
const UserModel = require("../models/user.model");

const getAllMentors = async () => {
  return await UserModel.find({ role: "mentor" });
};

const getMentorById = async (id) => {
  return await UserModel.findOne({ _id: id, role: "mentor" });
};

const getMentorByUsername = async (username) => {
  return await UserModel.findOne({ username, role: "mentor" });
};

const getMentorServices = async (id) => {
  return await ServiceModel.find({ mentor: id, active: true });
};

module.exports = {
  getAllMentors,
  getMentorById,
  getMentorByUsername,
  getMentorServices,
};
