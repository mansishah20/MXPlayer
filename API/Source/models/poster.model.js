module.exports = (sequelize, Sequelize) => {
    const Poster = sequelize.define("poster", {
      url: {
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

    Poster.sync();
    return Poster;
  };
  