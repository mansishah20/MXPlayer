const express = require('express');
const router = express.Router();
const seasonDomain = require('../domain/controller.domain/season.domain');

class seasonController{
  static getSeason(req,res){
    const season = new seasonDomain()
    season.getSeason(req,res)
  }
  static getOneSeason(req,res){
    const season = new seasonDomain()
    season.getOneSeason(req,res)
  }
  static addSeason(req,res){
    const season = new seasonDomain()
    season.addSeason(req,res)
  }
  static updateSeason(req,res){
    const season = new seasonDomain()
    season.updateSeason(req,res)
  }
  static deleteSeason(req,res){
    const season = new seasonDomain()
    season.deleteSeason(req,res)
  } 
}

router.get("/",seasonController.getSeason)
router.get("/:id",seasonController.getOneSeason)
router.post("/",seasonController.addSeason)
router.put("/:id",seasonController.updateSeason)
router.patch("/:id",seasonController.updateSeason)
router.delete("/:id",seasonController.deleteSeason)

module.exports = router;

// {
//   "season_name": "",
//   "season_no": "",
//   "showid": ""
// }