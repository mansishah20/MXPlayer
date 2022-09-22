const db = require("../../models");
const Language = db.language;
const Op = db.Sequelize.Op;

class languageDomain {
  async addLanguage(req, res) {
    try {
      if (!req.body.language_name) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
      }
      // Create a language
      const language = req.body;
      // Save language in the database
      const data = await Language.create(language);
      res.send(data);
    } catch (err) {
      // Validate request
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Language.",
      });
    }
  }

  // Retrieve all language from the database.
  async getLanguage(req, res) {
    const language_name = req.query.language_name;
    var condition = language_name
      ? { language_name: { [Op.like]: `%${language_name}%` } }
      : null;

    Language.findAll({ where: condition })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Language.",
        });
      });
  }

  // Find a single Tutorial with an id
  async getOneLanguage(req, res) {
    const id = req.params.id;

    Language.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Language with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Language with id=" + id,
        });
      });
  }

  // Update a Tutorial by the id in the request
  async updateLanguage(req, res) {
    const id = req.params.id;

    Language.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Language was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Language with id=${id}. Maybe Language was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Language with id=" + id,
        });
      });
  }

  // Delete a Tutorial with the specified id in the request
  async deleteLanguage(req, res) {
    const id = req.params.id;

    Language.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Language was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Language with id=${id}. Maybe Language was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Language with id=" + id,
        });
      });
  }
  async deleteAllLanguage(req, res) {
    Language.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} Language were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Language.",
        });
      });
  }
}
module.exports = languageDomain;
