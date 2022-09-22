module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define("activity", {
    is_watched: {
      type: Sequelize.BOOLEAN,
    },
    is_liked: {
      type: Sequelize.BOOLEAN,
    },
    addtolist: {
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
  return Activity;
};
