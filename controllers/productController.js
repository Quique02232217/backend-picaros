const productService = require("../services/productService");

const catchAsync = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const getAllProducts = catchAsync(async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
});

const getProductById = catchAsync(async (req, res) => {
  const product = await productService.getProductsById(req.params.id);
  res.json(product);
});

const createProduct = catchAsync(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json(product);
});

const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.json(product);
});

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
};
