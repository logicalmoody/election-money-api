export const scrapeLog = (sequelize, Sequelize) => {
  return sequelize.define("ScrapeLog", {
    ScrapeLogId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ScrapeDate: {
      type: Sequelize.DATE
    },
    ProcessDate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    RawData: {
      type: Sequelize.TEXT("long")
    },
    PageURL: {
      type: Sequelize.STRING(1000),
      values: ["Debug", "Info", "Warn", "Error", "Fatal"]
    }
  })
}
