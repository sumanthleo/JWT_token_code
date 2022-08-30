const sequelize = require("sequelize");
const db = require("../config/dataBase");
const SubCategories = require("./SubCategories");

const Category = db.define(
  "category",
  {
    categoryId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    category_name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    category_type: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    category_description: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    category_image: {
      type: sequelize.DataTypes.STRING,
    },
  },
  { timestamps: true }
);

Category.associate = (model) => {
  Category.hasMany(SubCategories, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  Category.hasMany(model.ProductModel, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

// Category.sync({ alter: true })
//   .then(() => {
//     console.log("Category table created successfully");
//   })
//   .catch((err) => {
//     console.log("Error creating table: ", err.message);
//   });

module.exports = Category;
