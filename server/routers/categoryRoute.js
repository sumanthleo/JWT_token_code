const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
} = require("../controller/Category_Controller");
const routers = express.Router();

routers.post("/create_category", createCategory);
routers.get("/categorys", getAllCategories);
routers.get("/category_by_id/:id", getCategoryById);

exports.categoriesRouter = routers;
