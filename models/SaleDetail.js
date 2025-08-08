const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Sale = require("./Sale");
const Product = require("./Product");

const SaleDetail = sequelize.define(
  "sale_details",
  {
    id_sale_details: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_sale: {
      type: DataTypes.BIGINT,
      references: {
        model: Sale,
        key: "id_sales",
      },
    },
    id_products: {
      type: DataTypes.BIGINT,
      references: {
        model: Product,
        key: "id_product",
      },
    },
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL(10, 2),
    total_price: DataTypes.DECIMAL(10, 2),
  },
  {
    tableName: "sale_details",
    timestamps: false,
  }
);

module.exports = SaleDetail;
