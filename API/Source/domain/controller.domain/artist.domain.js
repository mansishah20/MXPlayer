const {connquery,connquery1} = require('../../middleware/connquery');

class artistDoamin{
    async getArtist(req,res){
        try{
            let query = "SELECT * FROM artist";
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Artist not found",err);
        }
    }
    async getOneArtist(req,res){
        try{
            let query = `SELECT * FROM artist WHERE artistid = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Artist not found",err);
        }        
    }
    async addArtist(req,res){
        try{
            let query = "INSERT INTO artist SET ?";
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("Artist not create",err);
        }  
    }
    async updateArtist(req,res){
        try{
            let query = `UPDATE artist SET ? WHERE artistid = ${req.params.id}`;
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("Artist not update",err);
        }
    }
    async deleteArtist(req,res){
        try{
            let query = `DELETE FROM artist WHERE artistid = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("Artist not found",err);
        }
    }
}

module.exports = artistDoamin;