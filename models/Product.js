const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define(
  "products",
  {
    id_product: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name_product: DataTypes.STRING,
    price_product: DataTypes.DECIMAL,
    stock: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    details: DataTypes.STRING,
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

module.exports = Product;
