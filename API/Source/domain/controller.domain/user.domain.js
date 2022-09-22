const db = require("../../models");
const User = db.user;
const Op = db.Sequelize.Op;
var bcrypt = require("bcrypt");

class userDomain {
  async addUser(req, res) {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    // Create a User
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);
    req.body.password = encryptedPassword;
    const user = req.body;

    // Save User in the database
    User.create(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  }

  // Retrieve all Users from the database.
  async getUser(req, res) {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    User.findAll({ where: condition })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving User.",
        });
      });
  }

  // Find a single User with an id
  async getOneUser(req, res) {
    const id = req.params.id;

    User.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id,
        });
      });
  }

  // Update a User by the id in the request
  async updateUser(req, res) {
    const id = req.params.id;
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);
    req.body.password = encryptedPassword;
    User.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
        });
      });
  }

  // Delete a User with the specified id in the request
  async deleteUser(req, res) {
    const id = req.params.id;

    User.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete User with id=" + id,
        });
      });
  }
  async deleteAllUser(req, res) {
    User.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} User were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all User.",
        });
      });
  }
}
module.exports = userDomain;
