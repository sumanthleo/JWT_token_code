const Sequelize = require("sequelize");
const db = require("../config/dataBase");

const Payment = db.define(
  "payment",
  {
    user_info: {
      type: Sequelize.STRING,
    },
    payment_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    payment_Type: {
      type: Sequelize.DataTypes.STRING,
      enum: ["Cash", "Card", "Paypal"],
    },
    payment_Amount: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    payment_Status: {
      type: Sequelize.DataTypes.STRING,
      enum: ["Paid", "Unpaid"],
    },
    orderDate: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  { timestamps: true }
);
module.exports = Payment;
