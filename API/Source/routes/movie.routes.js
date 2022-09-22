module.exports = app => {
    const movie = require("../controllers/movie.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();
  
    // Create a new Movie
    // router.post("/",[authJwt.verifyToken, authJwt.isAdmin], movie.addMovie);
    router.post("/", movie.addMovie);
  
    // Retrieve all Movies
    router.get("/", movie.getMovie);
  
    // Retrieve a single Movie with id
    router.get("/:id", movie.getOneMovie);
  
    // Update a Movie with id
    router.put("/:id",[authJwt.verifyToken, authJwt.isAdmin], movie.updateMovie);
  
    // Delete a Movie with id
    router.delete("/:id",[authJwt.verifyToken, authJwt.isAdmin], movie.deleteMovie);
  
    // Delete all Movies
    router.delete("/",[authJwt.verifyToken, authJwt.isAdmin], movie.deleteAllMovie);
  
    app.use('/api/movie', router);
  };
  