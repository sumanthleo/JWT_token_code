const db = require("../config/dataBase");
const Sequelize = require("Sequelize");

const Shipping_Address = db.define(
  "shipping_address",
  {
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: Sequelize.DataTypes.STRING,
    },
    city: {
      type: Sequelize.DataTypes.STRING,
    },
    state: {
      type: Sequelize.DataTypes.STRING,
    },
    country: {
      type: Sequelize.DataTypes.STRING,
    },
    pincode: {
      type: Sequelize.DataTypes.STRING,
    },
    phone_number: {
      type: Sequelize.DataTypes.STRING,
    },
    landmark: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  { timestamps: true }
);

module.exports = Shipping_Address;
