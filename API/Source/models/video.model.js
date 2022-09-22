module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("video", {
      video_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.ENUM('movie','episode','music')
      },
      rating: {
        type: Sequelize.TINYINT,
        validate:{
            min: 0,
            max: 10
        }
      },
      reales_year: {
        type: Sequelize.SMALLINT,
        validate: {
            len: [4]
        }
      },
      watch_count: {
        type: Sequelize.INTEGER
      },
      thumbnail_path: {
        type: Sequelize.STRING
      },
      video_path:{
        type: Sequelize.STRING
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          allowNull: false,
          type:Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    });
    // Video.associate = function(models) {
    //   Video.hasOne(models.movie, {as: 'movie'})
    // };
    return Video;
  };
  