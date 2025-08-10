const Customer = require("../models/Customer");
const ApiError = require("../utils/ApiError");

const getAllCustomers = async () => {
  return await Customer.findAll();
};

const getCustomerById = async (id) => {
  const customer = await Customer.findByPk(id);
  console.log("-->", customer);
  if (!customer) throw new ApiError(404, "Customer not found");
  return customer;
};

const createCustomer = async (data) => {
  return await Customer.create(data);
};

const updateCustomer = async (id, data) => {
  const customer = await Customer.findByPk(id);
  if (!customer) throw new ApiError(404, "Customer not found");
  await customer.update(data);
  return customer;
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
};
