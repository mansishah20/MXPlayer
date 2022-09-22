const conn = require('../../connection');
const {connquery,connquery1} = require('../../middleware/connquery');

class webshowDomain{
    async getWebshow(req,res){
        try{
            let query = "SELECT * FROM webshow";
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Webshow not found",err);
        }
    }
    async getOneWebshow(req,res){
        try{
            let query = `SELECT * FROM webshow WHERE webshowid = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Webshow not found",err);
        }        
    }
    async addWebshow(req,res){
        try{
            let query = "INSERT INTO webshow SET ?";
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("Webshow not create",err);
        }  
    }
    async updateWebshow(req,res){
        try{
            let query = `UPDATE webshow SET ? WHERE webshowid = ${req.params.id}`;
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("Webshow not update",err);
        }
    }
    async deleteWebshow(req,res){
        try{
            let query = `DELETE FROM webshow WHERE webshowid = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Webshow not found",err);
        }
    }
}

module.exports = webshowDomain;