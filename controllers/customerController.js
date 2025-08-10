const customerService = require("../services/customerService");

const catchAsync = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const getAllCustomers = catchAsync(async (req, res) => {
  const customers = await customerService.getAllCustomers();
  res.json(customers);
});

const getCustomerById = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.id);
  res.json(customer);
});

const createCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.createCustomer(req.body);
  res.status(201).json(customer);
});

const updateCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.updateCustomer(
    req.params.id,
    req.body
  );
  res.json(customer);
});

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
};
