const db = require("../models");
const Poster = db.poster;
const Op = db.Sequelize.Op;

// class PosterController{
//     async getPosters(req,res){
exports.getPosters = (req, res) => {
  Poster.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Posters.",
      });
    });
};
