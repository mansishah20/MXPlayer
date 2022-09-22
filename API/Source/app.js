const express = require('express');
require('dotenv').config();
const app = express();
var router = express.Router();
const webshow = require('./controllers/webshow.controller');
const activity = require('./controllers/activity.controller');
const show_category = require('./controllers/show_category.controller');
const season = require('./controllers/season.controller');
const episode = require('./controllers/episode.controller');
const artist = require('./controllers/artist.controller');
const show_artist = require('./controllers/show_artist.controller');
const movie_artist = require('./controllers/movie_artist.controller');
const cors = require("cors");


var corsOptions = {
  rigin: process.env.BASEURL
};

app.use(cors(corsOptions));
app.disable("x-powered-by");
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
require("./routes/category.routes")(app);
require("./routes/language.routes")(app);
require("./routes/video.routes")(app);
require("./routes/movie.routes")(app);
require("./routes/basicuser.routes")(app);
require("./routes/activity.routes")(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use('/show', webshow);
app.use('/activity',activity);
app.use('/show_category',show_category);
app.use('/season',season);
app.use('/episode',episode);
app.use('/artist',artist);
app.use('/show_artist',show_artist);
app.use('/movie_artist',movie_artist);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to MX Player." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
module.exports = router;