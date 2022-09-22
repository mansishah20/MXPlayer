module.exports = (sequelize, Sequelize) => {
    
    const Movie = sequelize.define("movie", {
        // categoryId: Sequelize.INTEGER,
        // languageId: Sequelize.INTEGER,
        // videoId: Sequelize.INTEGER,
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
    // Movie.associate = function(models) {
    //     Movie.belongsTo(models.category, {foreignKey: 'categoryId'}),
    //     Movie.belongsTo(models.language, {foreignKey: 'languageId'}),
    //     Movie.belongsTo(models.video, {foreignKey: 'videoId'})
    //   };
    
  
    return Movie;
  };
  