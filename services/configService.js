const Config = require("../models/Config");
const ApiError = require("../utils/ApiError");

const getAllVariablesOfConfiguration = async () => {
  return await Config.findAll();
};

const createVariablesOfConfiguration = async (data) => {
  return await Config.create(data);
};

module.exports = {
  getAllVariablesOfConfiguration,
  createVariablesOfConfiguration,
};
