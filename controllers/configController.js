const configService = require("../services/configService");

const catchAsync = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const getAllVariablesOfConfiguration = catchAsync(async (req, res) => {
  const config = await configService.getAllVariablesOfConfiguration();
  res.json(config);
});

const createVariablesOfConfiguration = catchAsync(async (req, res) => {
  const config = await configService.createVariablesOfConfiguration(req.body);
  res.status(201).json(config);
});

module.exports = {
  getAllVariablesOfConfiguration,
  createVariablesOfConfiguration,
};
