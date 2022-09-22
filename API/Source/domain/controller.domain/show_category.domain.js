const conn = require('../../connection');
const {connquery,connquery1} = require('../../middleware/connquery');

class showCategoryDomain{
    async getShowCategory(req,res){
        try{
            let query = "SELECT * FROM show_category";
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("ShowCategory not found",err);
        }
    }
    async getOneShowCategory(req,res){
        try{
            let query = `SELECT * FROM show_category WHERE show_category_id = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("ShowCategory not found",err);
        }        
    }
    async addShowCategory(req,res){
        try{
            let query = "INSERT INTO show_category SET ?";
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("ShowCategory not create",err);
        }  
    }
    async updateShowCategory(req,res){
        try{
            let query = `UPDATE show_category SET ? WHERE show_category_id = ${req.params.id}`;
            await connquery1(query,req.body,res);
        }
        catch(err){
            res.status(404).send("ShowCategory not update",err);
        }
    }
    async deleteShowCategory(req,res){
        try{
            let query = `DELETE FROM show_category WHERE show_category_id = ${req.params.id}`;
            await connquery(query,res);
        }
        catch(err){
            res.status(404).send("ShowCategory not found",err);
        }
    }
}

module.exports = showCategoryDomain;

// https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-angular-app-with-nodejs-e24c40444421