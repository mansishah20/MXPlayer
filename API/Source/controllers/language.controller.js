const languageDomain = require('../domain/controller.domain/language.domain');

class languageController{
  static getLanguage(req,res){
    const language = new languageDomain()
    language.getLanguage(req,res)
  }
  static getOneLanguage(req,res){
    const language = new languageDomain()
    language.getOneLanguage(req,res)
  }
  static addLanguage(req,res){
    const language = new languageDomain()
    language.addLanguage(req,res)
  }
  static updateLanguage(req,res){
    const language = new languageDomain()
    language.updateLanguage(req,res)
  }
  static deleteLanguage(req,res){
    const language = new languageDomain()
    language.deleteLanguage(req,res)
  } 
  static deleteAllLanguage(req,res){
    const language = new languageDomain()
    language.deleteAllLanguage(req,res)
  } 
}

module.exports = languageController;

// {
//   "language_name": ""
// }