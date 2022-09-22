module.exports = app => {
    const language = require("../controllers/language.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();
  
    // Create a new Language
    router.post("/",[authJwt.verifyToken, authJwt.isAdmin], language.addLanguage);
  
    // Retrieve all Languages
    router.get("/", language.getLanguage);
  
    // Retrieve a single Language with id
    router.get("/:id", language.getOneLanguage);
  
    // Update a Language with id
    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin],language.updateLanguage);
  
    // Delete a Language with id
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin],language.deleteLanguage);
  
    // Delete all Languages
    router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], language.deleteAllLanguage);
  
    app.use('/api/language', router);
  };
  