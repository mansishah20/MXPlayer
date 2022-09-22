module.exports = app => {
    const user = require("../controllers/basicuser.controller.js");
    const { authJwt } = require("../middleware");
    
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], user.addUser);
  
    // Retrieve all Users
    router.get("/", [authJwt.verifyToken, authJwt.isAdmin], user.getUser);
  
    // Retrieve a single User with id
    router.get("/:id", [authJwt.verifyToken, authJwt.isAdmin], user.getOneUser);
  
    // Update a User with id
    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], user.updateUser);
  
    // Delete a User with id
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], user.deleteUser);
  
    // Delete all Users
    router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], user.deleteAllUser);
  
    app.use('/api/user', router);
  };
  