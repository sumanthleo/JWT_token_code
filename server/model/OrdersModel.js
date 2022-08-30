const db = require("../config/dataBase");
const Sequelize = require("sequelize");

const Orders = db.define(
  "orders",
  {
    user_Info: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    order_Items: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    total_price: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    tax_price: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    shipping_price: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    order_status: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      enum: ["pending", "processing", "delivered", "cancelled"],
    },
    order_date: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    order_time: {
      type: Sequelize.DataTypes.TIME,
      allowNull: false,
    },
    is_paid: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_delivered: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      enum: [true, false],
    },
    paid_At: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: true }
);
module.exports = Orders;
