const db = require("../models");
const User = db.user;
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      name: req.body.name
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }
    // Email
    User.findOne({
      where: {
        contact: req.body.contact
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Contact Number is already in use!"
        });
        return;
      }
      next();
    });
  });
};

module.exports = checkDuplicateUsernameOrEmail;