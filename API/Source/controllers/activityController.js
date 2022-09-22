const activitiyDomain = require("../domain/controller.domain/activity.domain");

class activityController {
  static getList(req, res) {
    const activity = new activitiyDomain();
    activity.getList(req, res);
  }
  static addtoList(req, res) {
    const activity = new activitiyDomain();
    activity.addtoList(req, res);
  }
}

module.exports = activityController;
