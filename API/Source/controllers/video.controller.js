const VideoDomain = require('../domain/controller.domain/video.domain');

class videoController{
    static getVideo(req,res){
      const Video = new VideoDomain()
      Video.getVideo(req,res)
    }
    static getOneVideo(req,res){
      const Video = new VideoDomain()
      Video.getOneVideo(req,res)
    }
    static addVideo(req,res){
      const Video = new VideoDomain()
      Video.addVideo(req,res)
    }
    static updateVideo(req,res){
      const Video = new VideoDomain()
      Video.updateVideo(req,res)
    }
    static deleteVideo(req,res){
      const Video = new VideoDomain()
      Video.deleteVideo(req,res)
    }
    static deleteAllVideo(req,res){
        const Video = new VideoDomain()
        Video.deleteAllVideo(req,res)
      } 
}

module.exports = videoController;
  
// {
//   "video_name": "",
//   "description": "",
//   "type": "",
//   "rating": "",
//   "reales_year": "",
//   "watch_count": "",
//   "thumbnail_path": "",
//   "video_path": ""
// }

// https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb