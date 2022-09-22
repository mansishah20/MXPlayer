const db = require("../../models");

const Video = db.video;
const Op = db.Sequelize.Op;

class videoDomain{
    async addVideo(req,res){
    // Validate request
    if (!req.body.video_name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Video
    const video = req.body;

    // Save Video in the database
    Video.create(video)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Video."
        });
        });
    };

    // Retrieve all Videos from the database.
    async getVideo(req,res){
        const video_name = req.query.video_name;
        var condition = video_name ? { video_name: { [Op.like]: `%${video_name}%` } }: null;

        Video.findAll({ where: condition })
            .then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Video."
            });
            });
    };

        // Find a single Video with an id
    async getOneVideo(req,res){
        const id = req.params.id;

        Video.findByPk(id)
            .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                message: `Cannot find Video with id=${id}.`
                });
            }
            })
            .catch(err => {
            res.status(500).send({
                message: "Error retrieving Video with id=" + id
            });
            });
    };

    // Update a Video by the id in the request
    async updateVideo(req,res){
        const id = req.params.id;

        Video.update(req.body, {
            where: { id: id }
        })
            .then(num => {
            if (num == 1) {
                res.send({
                message: "Video was updated successfully."
                });
            } else {
                res.send({
                message: `Cannot update Video with id=${id}. Maybe Video was not found or req.body is empty!`
                });
            }
            })
            .catch(err => {
            res.status(500).send({
                message: "Error updating Video with id=" + id
            });
            });
     };

    // Delete a Video with the specified id in the request
    async deleteVideo(req,res){
        const id = req.params.id;

        Video.destroy({
            where: { id: id }
        })
            .then(num => {
            if (num == 1) {
                res.send({
                message: "Video was deleted successfully!"
                });
            } else {
                res.send({
                message: `Cannot delete Video with id=${id}. Maybe Video was not found!`
                });
            }
            })
            .catch(err => {
            res.status(500).send({
                message: "Could not delete Video with id=" + id
            });
            });
    };
    async deleteAllVideo(req,res){
        Video.destroy({
        where: {},
        truncate: false
        })
        .then(nums => {
        res.send({ message: `${nums} Video were deleted successfully!` });
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all Video."
        });
        });
    };

}
module.exports = videoDomain;