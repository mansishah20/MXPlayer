module.exports = (sequelize, Sequelize) => {
  const Language = sequelize.define("language", {
    language_name: {
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
  // Language.associate = function(models) {
  //   Language.hasMany(models.movie, {as: 'movie'})
  // };
  return Language;
};
