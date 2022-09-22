const express = require('express');
const router = express.Router();
const episodeDomain = require('../domain/controller.domain/episode.domain');

class episodeController{
  static getEpisode(req,res){
    const episode = new episodeDomain()
    episode.getEpisode(req,res)
  }
  static getOneEpisode(req,res){
    const episode = new episodeDomain()
    episode.getOneEpisode(req,res)
  }
  static addEpisode(req,res){
    const episode = new episodeDomain()
    episode.addEpisode(req,res)
  }
  static updateEpisode(req,res){
    const episode = new episodeDomain()
    episode.updateEpisode(req,res)
  }
  static deleteEpisode(req,res){
    const episode = new episodeDomain()
    episode.deleteEpisode(req,res)
  } 
}

router.get("/",episodeController.getEpisode)
router.get("/:id",episodeController.getOneEpisode)
router.post("/",episodeController.addEpisode)
router.put("/:id",episodeController.updateEpisode)
router.patch("/:id",episodeController.updateEpisode)
router.delete("/:id",episodeController.deleteEpisode)

module.exports = router;

// {
//   "seasonid": "",
//   "episode_no": "",
//   "videoid": ""
// }