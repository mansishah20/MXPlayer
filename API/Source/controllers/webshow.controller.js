const express = require('express');
const router = express.Router();
const webshowDomain = require('../domain/controller.domain/webshow.domain');

class webshowController{
  static getWebshow(req,res){
    const webshow = new webshowDomain()
    webshow.getWebshow(req,res)
  }
  static getOneWebshow(req,res){
    const webshow = new webshowDomain()
    webshow.getOneWebshow(req,res)
  }
  static addWebshow(req,res){
    const webshow = new webshowDomain()
    webshow.addWebshow(req,res)
  }
  static updateWebshow(req,res){
    const webshow = new webshowDomain()
    webshow.updateWebshow(req,res)
  }
  static deleteWebshow(req,res){
    const webshow = new webshowDomain()
    webshow.deleteWebshow(req,res)
  } 
}

router.get("/",webshowController.getWebshow)
router.get("/:id",webshowController.getOneWebshow)
router.post("/",webshowController.addWebshow)
router.put("/:id",webshowController.updateWebshow)
router.patch("/:id",webshowController.updateWebshow)
router.delete("/:id",webshowController.deleteWebshow)

module.exports = router;

// {
//   "show_name" : "",
//   "description" : "",
//   "languageid" : "",
//   "rating" : "",
//   "reales_year": "",
//   "no_of_episode" : "",
//   "thumbnail_path" : ""
// }