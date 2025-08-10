const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define(
  "customers",
  {
    id_customers: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name_customers: DataTypes.STRING,
    phone_customers: DataTypes.STRING,
    address: DataTypes.STRING,
    created_at: DataTypes.DATE,
  },
  {
    tableName: "customers",
    timestamps: false,
  }
);

module.exports = Customer;
