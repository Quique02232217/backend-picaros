const Product = require("../models/Product");
const ApiError = require("../utils/ApiError");

const getAllProducts = async () => {
  return await Product.findAll();
};

const getProductsById = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) throw new ApiError(404, "Product not found");
  return product;
};

const createProduct = async (data) => {
  return await Product.create(data);
};

const updateProduct = async (id, data) => {
  const product = await Product.findByPk(id);
  if (!product) throw new ApiError(404, "Product not found");
  await product.update(data);
  return product;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
};
