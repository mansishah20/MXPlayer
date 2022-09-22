const verifySignUp = require("../middleware");
const controller = require("../controllers/auth.controller");
const poster = require("../controllers/poster.controller")
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/signup",
    [
      verifySignUp.verifySignUp
    ],
    controller.signup
  );
  app.post("/api/signin", controller.signin);
  app.get("/poster", poster.getPosters);

};