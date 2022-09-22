const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.category = require("./category.model.js")(sequelize, Sequelize);
db.language = require("./language.model")(sequelize,Sequelize);
db.video = require("./video.model")(sequelize,Sequelize);
db.movie = require('./movie.model')(sequelize,Sequelize);
db.user = require('./user.model')(sequelize,Sequelize);
db.poster = require('./poster.model')(sequelize, Sequelize);
db.activity = require('./activity.model')(sequelize, Sequelize);
// db.data = require('../seeders/20220819123703-demo-posters')(sequelize, Sequelize)
db.category.hasMany(db.movie, { as: "movie" });
db.language.hasMany(db.movie, { as: "movie" });
// db.video.hasOne(db.movie, { as: "movie" });
db.movie.belongsTo(db.category, { foreignKey: "categoryId", as: "category" });
db.movie.belongsTo(db.language, { foreignKey: "languageId", as: "language" });
db.movie.belongsTo(db.video, { foreignKey: { name : "videoId", allowNull: false }});

db.user.hasMany(db.activity, { as: 'activity'});
db.video.hasMany(db.activity, { as: 'activity'});
db.activity.belongsTo(db.user, { foreignKey: "userId", as: "user" });
db.activity.belongsTo(db.video, { foreignKey: "videoId", as: "video" });
module.exports = db;
