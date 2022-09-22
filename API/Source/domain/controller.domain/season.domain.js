const {connquery,connquery1} = require('../../middleware/connquery');

class seasonDomain{
    async getSeason(req,res){
        try{
            let query = "SELECT * FROM season";
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Season not found",err);
        }
    }
    async getOneSeason(req,res){
        try{
            let query = `SELECT * FROM season WHERE seasonid = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Season not found",err);
        }        
    }
    async addSeason(req,res){
        try{
            let query = "INSERT INTO season SET ?";
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("Season not create",err);
        }  
    }
    async updateSeason(req,res){
        try{
            let query = `UPDATE season SET ? WHERE seasonid = ${req.params.id}`;
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("Season not update",err);
        }
    }
    async deleteSeason(req,res){
        try{
            let query = `DELETE FROM season WHERE seasonid = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Season not found",err);
        }
    }
}

module.exports = seasonDomain;