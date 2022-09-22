const categoryDomain = require("../domain/controller.domain/category.domain");

class categoryController {
  static getCategory(req, res) {
    const category = new categoryDomain();
    category.getCategory(req, res);
  }
  static getOneCategory(req, res) {
    const category = new categoryDomain();
    category.getOneCategory(req, res);
  }
  static addCategory(req, res) {
    const category = new categoryDomain();
    category.addCategory(req, res);
  }
  static updateCategory(req, res) {
    const category = new categoryDomain();
    category.updateCategory(req, res);
  }
  static deleteCategory(req, res) {
    const category = new categoryDomain();
    category.deleteCategory(req, res);
  }
  static deleteAllCategory(req, res) {
    const category = new categoryDomain();
    category.deleteAllCategory(req, res);
  }
}

module.exports = categoryController;
