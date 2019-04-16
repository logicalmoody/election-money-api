import Sequelize from "sequelize"
import { candidate } from "./models/candidate.model"
import { contribution } from "./models/contribution.model"
import { contributor } from "./models/contributor.model"
import { log } from "./models/log.model"
import { scrapeLog } from "./models/scrapeLog.model"

export const env = process.env.NODE_ENV || "development"

export let sequelize
if (env === "development") {
  sequelize = new Sequelize({
    host: "localhost",
    dialect: "sqlite",
    storage: ":memory:"
  })
  console.log("Configured local SQLite database.")
} else {
  // TODO Set up real DB connection here
  // sequelize = ...
  console.log("Configured remote Azure database.")
}

export const db = {
  init: () => {
    return new Promise(async (resolve, reject) => {
      try {
        await sequelize
          .authenticate()
          .then(() => console.log("Connection established to the database."))
          .catch(err =>
            console.error("Unable to connect to the database:", err)
          )

        // Create tables from models
        db.candidate = candidate(sequelize, Sequelize)
        db.contributor = contributor(sequelize, Sequelize)
        db.contribution = contribution(sequelize, Sequelize)
        db.log = log(sequelize, Sequelize)
        db.scrapeLog = scrapeLog(sequelize, Sequelize)

        // Define relationships
        db.candidate.hasMany(db.contribution, { foreignKey: "CandidateId" })
        db.contributor.hasMany(db.contribution, { foreignKey: "ContributorId" })
        db.scrapeLog.hasOne(db.candidate, { foreignKey: "CandidateId" })
        db.log.hasOne(db.scrapeLog, { foreignKey: "ScrapeLogId" })

        // Sync tables
        await db.contribution.sync()
        await db.candidate.sync()
        await db.contributor.sync()
        await db.scrapeLog.sync()
        await db.log.sync()

        resolve()
      } catch (error) {
        console.error("Unable to connect to the database:", error)
      }
    })
  },
  close: () => {
    return new Promise((resolve, reject) => {
      sequelize
        .close()
        .then(() => {
          console.log("Connection closed.")
          resolve()
        })
        .catch(err => {
          console.error("Failed to close connection:", err)
        })
    })
  }
}
