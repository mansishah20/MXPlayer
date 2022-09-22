const {connquery,connquery1} = require('../../middleware/connquery');

class movieArtistDomain{
    async getMovieArtist(req,res){
        try{
            let query = "SELECT * FROM movie_artist";
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("MovieArtist not found",err);
        }
    }
    async getOneMovieArtist(req,res){
        try{
            let query = `SELECT * FROM movie_artist WHERE movie_artist_id = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("MovieArtist not found",err);
        }        
    }
    async addMovieArtist(req,res){
        try{
            let query = "INSERT INTO movie_artist SET ?";
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("MovieArtist not create",err);
        }  
    }
    async updateMovieArtist(req,res){
        try{
            let query = `UPDATE movie_artist SET ? WHERE movie_artist_id = ${req.params.id}`;
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("MovieArtist not update",err);
        }
    }
    async deleteMovieArtist(req,res){
        try{
            let query = `DELETE FROM movie_artist WHERE movie_artist_id = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("MovieArtist not found",err);
        }
    }
}

module.exports = movieArtistDomain;