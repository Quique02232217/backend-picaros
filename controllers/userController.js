const userService = require("../services/userService");

const catchAsync = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const getAllUser = catchAsync(async (req, res) => {
  const listUsers = await userService.getAllUser();
  console.log("--->", listUsers);
  res.json(listUsers);
});

const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
});

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json(user);
});

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
};
