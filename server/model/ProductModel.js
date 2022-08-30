const Sequelize = require("sequelize");
const db = require("../config/dataBase");

const ProductModel = db.define(
  "product",
  {
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    product_name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    product_description: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    product_image: {
      type: Sequelize.DataTypes.STRING,
    },
    product_quantity: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    product_status: {
      type: Sequelize.DataTypes.ENUM("available", "unavailable"),
      allowNull: false,
    },
    product_discount: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    product_discount_price: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    product_Instock: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    product_outofstock: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    product_rating: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    product_review: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    subcategoriesId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

ProductModel.associate = (model) => {
  ProductModel.belongsTo(model.Category, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    targetKey: "id",
  });

  ProductModel.belongsTo(model.SubCategories, {
    foreignKey: "subcategoriesId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    targetKey: "id",
  });
};

// ProductModel.sync({ alter: true })
//   .then(() => {
//     console.log("Product table created successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = ProductModel;
