const express = require('express');
const router = express.Router();
const movieArtistDomain = require('../domain/controller.domain/movie_artist.domain');

class movieArtistController{
  static getMovieArtist(req,res){
    const movieArtist = new movieArtistDomain()
    movieArtist.getMovieArtist(req,res)
  }
  static getOneMovieArtist(req,res){
    const movieArtist = new movieArtistDomain()
    movieArtist.getOneMovieArtist(req,res)
  }
  static addMovieArtist(req,res){
    const movieArtist = new movieArtistDomain()
    movieArtist.addMovieArtist(req,res)
  }
  static updateMovieArtist(req,res){
    const movieArtist = new movieArtistDomain()
    movieArtist.updateMovieArtist(req,res)
  }
  static deleteMovieArtist(req,res){
    const movieArtist = new movieArtistDomain()
    movieArtist.deleteMovieArtist(req,res)
  } 
}

router.get("/",movieArtistController.getMovieArtist);
router.get("/:id",movieArtistController.getOneMovieArtist);
router.post("/",movieArtistController.addMovieArtist);
router.put("/:id",movieArtistController.updateMovieArtist);
router.patch("/:id",movieArtistController.updateMovieArtist);
router.delete("/:id",movieArtistController.deleteMovieArtist);

module.exports = router;