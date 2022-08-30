const db = require("../config/dataBase");
const Sequelize = require("Sequelize");

const UserMetaData = db.define(
  "usermetadata",
  {
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: Sequelize.DataTypes.DATE,
    },
    state: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    user_address: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    last_login: {
      type: Sequelize.DataTypes.DATE,
    },
    total_orders: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    total_wallet_balance: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    total_purchased_amount: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);
module.exports = UserMetaData;
