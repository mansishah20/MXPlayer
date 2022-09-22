const {connquery,connquery1} = require('../../middleware/connquery');

class showArtistDomain{
    async getShowArtist(req,res){
        try{
            let query = "SELECT * FROM show_artist";
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("ShowArtist not found",err);
        }
    }
    async getOneShowArtist(req,res){
        try{
            let query = `SELECT * FROM show_artist WHERE show_artist_id = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("ShowArtist not found",err);
        }        
    }
    async addShowArtist(req,res){
        try{
            let query = "INSERT INTO show_artist SET ?";
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("ShowArtist not create",err);
        }  
    }
    async updateShowArtist(req,res){
        try{
            let query = `UPDATE show_artist SET ? WHERE show_artist_id = ${req.params.id}`;
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("ShowArtist not update",err);
        }
    }
    async deleteShowArtist(req,res){
        try{
            let query = `DELETE FROM show_artist WHERE show_artist_id = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("ShowArtist not found",err);
        }
    }
}

module.exports = showArtistDomain;