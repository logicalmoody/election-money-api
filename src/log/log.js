import { db } from "../db/db.js"

export const submit = (level, message) =>
  db.log.create({ EventTime: Date(), Level: level, Message: message })
