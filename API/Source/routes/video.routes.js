module.exports = app => {
    const video = require("../controllers/video.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();
  
    // Create a new Video
    router.post("/",[authJwt.verifyToken, authJwt.isAdmin] ,video.addVideo);
  
    // Retrieve all Videos
    router.get("/", video.getVideo);
  
    // Retrieve a single Video with id
    router.get("/:id", video.getOneVideo);
  
    // Update a Video with id
    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], video.updateVideo);
  
    // Delete a Video with id
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin],video.deleteVideo);
  
    // Delete all Videos
    router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], video.deleteAllVideo);
  
    app.use('/api/video', router);
  };
  