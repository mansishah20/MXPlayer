module.exports = app => {

    const activity = require("../controllers/activityController.js");
    const { authJwt } = require("../middleware");
     
    var router = require("express").Router();
  
    // Create a new Category
    router.post("/", [authJwt.verifyToken], activity.addtoList);  
    
    // Retrieve all Categorys
    router.get("/", [authJwt.verifyToken], activity.getList);
  
    app.use('/api/activity', router);
  };
  