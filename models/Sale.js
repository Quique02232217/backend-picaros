const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Customer = require("./Customer");

const Sale = sequelize.define(
  "sales",
  {
    id_sales: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.BIGINT,
      references: {
        model: User,
        key: "id_user",
      },
    },
    id_customer: {
      type: DataTypes.BIGINT,
      references: {
        model: Customer,
        key: "id_customers",
      },
    },
    total: DataTypes.DECIMAL(10, 2),
    created_at: DataTypes.DATE,
  },
  {
    tableName: "sales",
    timestamps: false,
  }
);

Sale.belongsTo(User, {
  foreignKey: "id_user",
  as: "user",
});

Sale.belongsTo(Customer, {
  foreignKey: "id_customer",
  as: "customer",
});

module.exports = Sale;
