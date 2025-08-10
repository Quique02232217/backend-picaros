const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "user",
  {
    id_user: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    create_at: DataTypes.DATE,
    ref_rol: DataTypes.STRING,
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

module.exports = User;
