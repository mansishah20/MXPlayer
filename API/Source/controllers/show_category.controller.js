const express = require('express');
const router = express.Router();
const showCategoryDomain = require('../domain/controller.domain/show_category.domain');

class showCategoryController{
  static getShowCategory(req,res){
    const showCategory = new showCategoryDomain()
    showCategory.getShowCategory(req,res)
  }
  static getOneShowCategory(req,res){
    const category = new showCategoryDomain()
    showCategory.getOneShowCategory(req,res)
  }
  static addShowCategory(req,res){
    const showCategory = new showCategoryDomain()
    showCategory.addShowCategory(req,res)
  }
  static updateShowCategory(req,res){
    const showCategory = new showCategoryDomain()
    showCategory.updateShowCategory(req,res)
  }
  static deleteShowCategory(req,res){
    const showCategory = new showCategoryDomain()
    showCategory.deleteShowCategory(req,res)
  } 
}

router.get("/",showCategoryController.getShowCategory)
router.get("/:id",showCategoryController.getOneShowCategory)
router.post("/",showCategoryController.addShowCategory)
router.put("/:id",showCategoryController.updateShowCategory)
router.patch("/:id",showCategoryController.updateShowCategory)
router.delete("/:id",showCategoryController.deleteShowCategory)

module.exports = router;

// {
//   "category_name": ""
// }