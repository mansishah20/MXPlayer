module.exports = app => {

  const category = require("../controllers/category.controller.js");
  const { authJwt } = require("../middleware");
   
  var router = require("express").Router();

  // Create a new Category
  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], category.addCategory);  
  
  // Retrieve all Categorys
  router.get("/", category.getCategory);

  // Retrieve a single Category with id
  router.get("/:id", category.getOneCategory);

  // Update a Category with id
  router.put("/:id",[authJwt.verifyToken, authJwt.isAdmin], category.updateCategory);

  // Delete a Category with id
  router.delete("/:id",[authJwt.verifyToken, authJwt.isAdmin], category.deleteCategory);
  
  // Delete all Categorys
  router.delete("/",[authJwt.verifyToken, authJwt.isAdmin], category.deleteAllCategory);

  app.use('/api/category', router);
};
