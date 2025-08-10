const saleService = require("../services/saleService");

const catchAsync = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const getAllSale = catchAsync(async (req, res) => {
  const listSales = await saleService.getAllSales();
  res.json(listSales);
});

module.exports = {
  getAllSale,
};
