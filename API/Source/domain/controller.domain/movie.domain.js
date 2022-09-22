const db = require("../../models");
const Movie = db.movie;
const Category = db.category;
const Language = db.language;
const Video = db.video;
const Op = db.Sequelize.Op;

class movieDomain{
    async addMovie(req,res){
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Movie
    const movie = req.body;

    // Save Movie in the database
    Movie.create(movie)
    //     include: [{
    //         model: Category,
    //         as: 'category',
    //         required: true
    //     },
    //     {
    //         model: Language,
    //         as: 'language',
    //         required: true
    //     },
    //     {
    //         model: Video,
    //         as: 'video',
    //         required: true
    //     }]
    // })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Movie."
        });
        });
    };

    // Retrieve all Movies from the database.
    async getMovie(req,res){
        const video_name = req.query.video_name;
        var condition = video_name ? { video_name: { [Op.like]: `%${video_name}%` } } : null;

        Movie.findAll({            
            include: [{
                model: Category,
                as: 'category',
                required: true
            },
            {
                model: Language,
                as: 'language',
                required: true
            },
            {
                model: Video,
                as: 'video',
                required: true,
                where: condition
            }],

            
            }).then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Movie."
            });
            });

    };

        // Find a single Movie with an id
    async getOneMovie(req,res){
        const id = req.params.id;

        Movie.findByPk(id,{
            include: [{
                model: Category,
                as: 'category',
                required: true
            },
            {
                model: Language,
                as: 'language',
                required: true
            },
            {
                model: Video,
                as: 'video',
                required: true
            }],
        }).then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                message: `Cannot find Movie with id=${id}.`
                });
            }
            })
            .catch(err => {
            res.status(500).send({
                message: "Error retrieving Movie with id=" + id
            });
            });
    };

    // Update a Movie by the id in the request
    async updateMovie(req,res){
        const id = req.params.id;

        Movie.update(req.body, {
            where: { id: id }
        })
            .then(num => {
            if (num == 1) {
                res.send({
                message: "Movie was updated successfully."
                });
            } else {
                res.send({
                message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
                });
            }
            })
            .catch(err => {
            res.status(500).send({
                message: "Error updating Movie with id=" + id
            });
            });
     };

    // Delete a Movie with the specified id in the request
    async deleteMovie(req,res){
        const id = req.params.id;

        Movie.destroy({
            where: { id: id }
        })
            .then(num => {
            if (num == 1) {
                res.send({
                message: "Movie was deleted successfully!"
                });
            } else {
                res.send({
                message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
                });
            }
            })
            .catch(err => {
            res.status(500).send({
                message: "Could not delete Movie with id=" + id
            });
            });
    };
    async deleteAllMovie(req,res){
        Movie.destroy({
        where: {},
        truncate: false
        })
        .then(nums => {
        res.send({ message: `${nums} Movie were deleted successfully!` });
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all Movie."
        });
        });
    };

}
module.exports = movieDomain;