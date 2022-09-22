const express = require('express');
const router = express.Router();
const showArtistDomain = require('../domain/controller.domain/show_artist.domain');

class showArtistController{
  static getShowArtist(req,res){
    const showArtist = new showArtistDomain()
    showArtist.getShowArtist(req,res)
  }
  static getOneShowArtist(req,res){
    const showArtist = new showArtistDomain()
    showArtist.getOneShowArtist(req,res)
  }
  static addShowArtist(req,res){
    const showArtist = new showArtistDomain()
    showArtist.addShowArtist(req,res)
  }
  static updateShowArtist(req,res){
    const showArtist = new showArtistDomain()
    showArtist.updateShowArtist(req,res)
  }
  static deleteShowArtist(req,res){
    const showArtist = new showArtistDomain()
    showArtist.deleteShowArtist(req,res)
  } 
}

router.get("/",showArtistController.getShowArtist);
router.get("/:id",showArtistController.getOneShowArtist);
router.post("/",showArtistController.addShowArtist);
router.put("/:id",showArtistController.updateShowArtist);
router.patch("/:id",showArtistController.updateShowArtist);
router.delete("/:id",showArtistController.deleteShowArtist);

module.exports = router;