const movieDomain = require('../domain/controller.domain/movie.domain');

class movieController{
  static getMovie(req,res){
    const movie = new movieDomain()
    movie.getMovie(req,res)
  }
  static getOneMovie(req,res){
    const movie = new movieDomain()
    movie.getOneMovie(req,res)
  }
  static addMovie(req,res){
    const movie = new movieDomain()
    movie.addMovie(req,res)
  }
  static updateMovie(req,res){
    const movie = new movieDomain()
    movie.updateMovie(req,res)
  }
  static deleteMovie(req,res){
    const movie = new movieDomain()
    movie.deleteMovie(req,res)
  } 
  static deleteAllMovie(req,res){
    const movie = new movieDomain()
    movie.deleteAllMovie(req,res)
  } 
}

module.exports = movieController;

// {
//   "categoryid" : "",
//   "languageid": "",
//   "videoid": ""
// }