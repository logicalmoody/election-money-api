import { db } from "../db/db"

export async function getLogs(req, res) {
  try {
    const start = new Date(req.query.start) || null
    const end = new Date(req.query.end) || null
    const results = await db.log.findAll({
      where: {
        EventTime: { $lte: start }
        // $and: [{ EventTime: { $gte: start } }, { EventTime: { $lte: end } }]
      },
      limit: req.query.limit,
      offset: req.query.offset,
      order: [["EventTime", "ASC"]]
    })
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting logs.")
    return
  }
}
