const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/UserController");
const { categoriesRouter } = require("./categoryRoute");
const { productRoutes } = require("./productRouter");
const { subcategoryRoutes } = require("./subCategoriesRoute");

router.post("/creates", createUser);

router.use(categoriesRouter);
router.use(subcategoryRoutes);
router.use(productRoutes);

module.exports = router;
