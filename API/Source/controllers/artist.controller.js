const express = require('express');
const router = express.Router();
const artistDoamin = require('../domain/controller.domain/artist.domain');

class artistController{
  static getArtist(req,res){
    const artist = new artistDoamin()
    artist.getArtist(req,res)
  }
  static getOneArtist(req,res){
    const artist = new artistDoamin()
    artist.getOneArtist(req,res)
  }
  static addArtist(req,res){
    const artist = new artistDoamin()
    artist.addArtist(req,res)
  }
  static updateArtist(req,res){
    const artist = new artistDoamin()
    artist.updateArtist(req,res)
  }
  static deleteArtist(req,res){
    const artist = new artistDoamin()
    artist.deleteArtist(req,res)
  } 
}

router.get("/",artistController.getArtist);
router.get("/:id",artistController.getOneArtist);
router.post("/",artistController.addArtist);
router.put("/:id",artistController.updateArtist);
router.patch("/:id",artistController.updateArtist);
router.delete("/:id",artistController.deleteArtist);

module.exports = router;