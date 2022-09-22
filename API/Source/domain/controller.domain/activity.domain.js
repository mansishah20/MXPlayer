const db = require("../../models");
const Activity = db.activity;
const Video = db.video;
const Op = db.Sequelize.Op;

class activityDomain {
  async addtoList(req, res) {
    try {
      const activity = req.body;
      // Save Category in the database
      let data = await Activity.create(activity);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    }
  }

  // Retrieve all Categorys from the database.
  async getList(req, res) {
    try {
      const userId = req.query.userId;
      // let data = await Category.findAll({ where: condition });
      res.send(
        await Activity.findAll({
          include: {
            model: Video,
            as: 'video',
            required: true
          },
          where: { userId: userId, addtoList: true },
          
        })
      );
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Data.",
      });
    }
  }
}
module.exports = activityDomain;
