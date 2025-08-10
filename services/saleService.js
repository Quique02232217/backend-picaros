const Sale = require("../models/Sale");
const User = require("../models/User");
const Customer = require("../models/Customer");

async function getAllSales() {
  return await Sale.findAll({
    include: [
      {
        model: User,
        as: "user",
        attributes: ["id_user", "user_name", "password", "ref_rol"],
      },
      {
        model: Customer,
        as: "customer",
        attributes: [
          "id_customers",
          "name_customers",
          "phone_customers",
          "address",
        ],
      },
    ],
  });
}

module.exports = { getAllSales };
