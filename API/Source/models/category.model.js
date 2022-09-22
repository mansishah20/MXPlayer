module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    category_name: {
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
  // Category.associate = function(models) {
  //   Category.hasMany(models.movie, {as: 'movie'})
  // };
  // Category.sync();
  return Category;
};
