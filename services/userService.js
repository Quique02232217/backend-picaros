const User = require("../models/User");
const ApiError = require("../utils/ApiError");

const getAllUser = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  console.log("-->", user);
  if (!user) throw new ApiError(404, "User not found");
  return user;
};

const createUser = async (data) => {
  return await User.create(data);
};

const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) throw new ApiError(404, "User not found");
  await user.update(data);
  return user;
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
};
