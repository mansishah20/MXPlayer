const express = require('express');
const router = express.Router();
const  activitiyDomain= require('../domain/controller.domain/activity.domain');

class activitiyController{
  static getActivity(req,res){
    const activity = new activitiyDomain()
    activity.getActivity(req,res)
  }
  static getOneActivity(req,res){
    const activity = new activitiyDomain()
    activity.getOneActivity(req,res)
  }
  static addActivity(req,res){
    const activity = new activitiyDomain()
    activity.addActivity(req,res)
  }
  static updateActivity(req,res){
    const activity = new activitiyDomain()
    activity.updateActivity(req,res)
  }
  static deleteActivity(req,res){
    const activity = new activitiyDomain()
    activity.deleteActivity(req,res)
  } 
}

router.get("/",activitiyController.getActivity)
router.get("/:id",activitiyController.getOneActivity)
router.post("/",activitiyController.addActivity)
router.put("/:id",activitiyController.updateActivity)
router.patch("/:id",activitiyController.updateActivity)
router.delete("/:id",activitiyController.deleteActivity)

module.exports = router;

// {
//   "userid": "",
//   "videoid": "",
//   "is_watched": "",
//   "is_liked": "",
//   "add_to_playlist": ""
// }