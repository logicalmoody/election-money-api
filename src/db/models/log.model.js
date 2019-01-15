export const log = (sequelize, Sequelize) => {
  return sequelize.define("Log", {
    LogId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    EventTime: {
      type: Sequelize.DATE
    },
    Level: {
      type: Sequelize.ENUM,
      values: ["Debug", "Info", "Warn", "Error", "Fatal"]
    },
    Message: {
      type: Sequelize.STRING(5000),
      allowNull: true
    }
  })
}
