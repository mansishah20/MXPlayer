const userDomain = require('../domain/controller.domain/user.domain');

class userController{
    static getUser(req,res){
      const user = new userDomain()
      user.getUser(req,res)
    }
    static getOneUser(req,res){
      const user = new userDomain()
      user.getOneUser(req,res)
    }
    static addUser(req,res){
      const user = new userDomain()
      user.addUser(req,res)
    }
    static updateUser(req,res){
      const user = new userDomain()
      user.updateUser(req,res)
    }
    static deleteUser(req,res){
      const user = new userDomain()
      user.deleteUser(req,res)
    }
    static deleteAllUser(req,res){
        const user = new userDomain()
        user.deleteAllUser(req,res)
      } 
}

module.exports = userController;
  