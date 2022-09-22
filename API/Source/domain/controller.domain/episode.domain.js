const conn = require('../../connection');
const {connquery,connquery1} = require('../../middleware/connquery');

class episodeDomain{
    async getEpisode(req,res){
        try{
            let query = "SELECT * FROM episode";
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Episode not found",err);
        }
    }
    async getOneEpisode(req,res){
        try{
            let query = `SELECT * FROM episode WHERE episodeid = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Episode not found",err);
        }        
    }
    async addEpisode(req,res){
        try{
            let query = "INSERT INTO episode SET ?";
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("Episode not create",err);
        }  
    }
    async updateEpisode(req,res){
        try{
            let query = `UPDATE episode SET ? WHERE episodeid = ${req.params.id}`;
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("Episode not update",err);
        }
    }
    async deleteEpisode(req,res){
        try{
            let query = `DELETE FROM episode WHERE episodeid = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Episode not found",err);
        }
    }
}

module.exports = episodeDomain;