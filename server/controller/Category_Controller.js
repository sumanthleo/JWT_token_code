const Category = require("../model/Category");
const Product = require("../model/ProductModel");
const SubCategories = require("../model/SubCategories");
class Category_Controller {
  //===========adding categories to the database==============

  async createCategory(req, res) {
    try {
      //adding category by using create method
      const newsubcategory = await Category.create({
        categoryId: req.body.categoryId,
        category_name: req.body.category_name,
        category_type: req.body.category_type,
        category_description: req.body.category_description,
        category_image: req.body.category_image,
      });
      res.status(200).json(newsubcategory);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //=============getting all categories from the database===========

  async getAllCategories(req, res) {
    try {
      //getting all categories by using findAll method
      const allCategories = await Category.findAll({
        include: [{ model: SubCategories }],
      });
      res.status(200).json(allCategories);
      console.log(allCategories);
    } catch (error) {
      console.log("!!!!!!!!Error!!!!!!!!!!", error);
      res.status(500).json(error);
    }
  }

  //=============getting category by id from the database==========

  async getCategoryById(req, res) {
    try {
      //getting category by id by using findById method
      const CategoryById = await Category.findByPk(req.params.id);
      res.status(200).json(CategoryById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new Category_Controller();
