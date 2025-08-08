const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Config = sequelize.define(
  "config",
  {
    entidad: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    codigo: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    detalle: DataTypes.STRING,
  },
  {
    tableName: "config",
    timestamps: false,
  }
);

module.exports = Config;
