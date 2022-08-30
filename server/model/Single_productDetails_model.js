const db = require("../config/dataBase");
const Sequelize = require("sequelize");

const Single_ProductDetails = db.define(
  "single_productdetails",
  {
    productId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: Sequelize.DataTypes.INTEGER,
    },
    product_description: {
      type: Sequelize.DataTypes.STRING,
    },
    product_image: {
      type: Sequelize.DataTypes.STRING,
    },
    product_quantity: {
      type: Sequelize.DataTypes.INTEGER,
    },
    product_category: {
      type: Sequelize.DataTypes.STRING,
    },
    product_subcategory: {
      type: Sequelize.DataTypes.STRING,
    },
    total_price: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  { timestamps: true }
);

module.exports = Single_ProductDetails;
