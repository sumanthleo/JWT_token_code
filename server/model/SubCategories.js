const sequelize = require("sequelize");
const db = require("../config/dataBase");
const Category = require("./Category");

const SubCategories = db.define(
  "subcategories",
  {
    subcategoriesId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    subcategories_name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    subcategories_type: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    subcategories_description: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    subcategories_image: {
      type: sequelize.DataTypes.STRING,
    },
    categoryId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

SubCategories.associate = (model) => {
  SubCategories.hasMany(model.ProductModel, {
    foreignKey: "productId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  SubCategories.belongsTo(Category, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

// SubCategories.sync({ alter: true }).then(() => {
//   console.log("SubCategories table created successfully");
// });

module.exports = SubCategories;
