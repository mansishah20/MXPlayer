const db = require("../../models");
const Category = db.category;
const Op = db.Sequelize.Op;

class categoryDomain {
  async addCategory(req, res) {
    try {
      // Validate request
      if (!req.body.category_name) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
      }
      // Create a Category
      const category = req.body;

      // Save Category in the database
      let data = await Category.create(category);
      res.send(data);
    } catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category.",
      });
    }
  }

  // Retrieve all Categorys from the database.
  async getCategory(req, res) {
    try {
      const category_name = req.query.category_name;
      let condition = category_name
        ? { category_name: { [Op.like]: `%${category_name}%` } }
        : null;
      // let data = await Category.findAll({ where: condition });
      res.send(await Category.findAll({ where: condition }));
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Category.",
      });
    }
  }

  // Find a single Category with an id
  async getOneCategory(req, res) {
    try {
      const id = req.params.id;
      let data = await Category.findByPk(id);
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Category with id=${id}.`,
        });
      }
    } catch {
      res.status(500).send({
        message: "Error retrieving Category with id=" + id,
      });
    }
  }

  // Update a Category by the id in the request
  async updateCategory(req, res) {
    try {
      const id = req.params.id;
      let num = await Category.update(req.body, {
        where: { id: id },
      });
      if (num == 1) {
        res.send({
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    } catch {
      res.status(500).send({
        message: "Error updating Category with id=" + id,
      });
    }
  }

  // Delete a Category with the specified id in the request
  async deleteCategory(req, res) {
    try {
      const id = req.params.id;
      let nums = await Category.destroy({ where: { id: id } });
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
        });
      }
    } catch {
      res.status(500).send({
        message: "Could not delete Category with id=" + id,
      });
    }
  }
  async deleteAllCategory(req, res) {
    try {
      let nums = await Category.destroy({
        where: {},
        truncate: false,
      });
      res.send({ message: `${nums} Category were deleted successfully!` });
    } catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Category.",
      });
    }
  }
}
module.exports = categoryDomain;
