import { db } from "../db/db"
import { orderFormatter } from "../helpers/order.helper"
import { submit } from "../log/log"

/* Returns all contributions. */
export async function getAllContributions(req, res) {
  try {
    const results = await db.contribution.findAll()
    submit("Info", "test")
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contributions.")
    return
  }
}

/* Returns the contribution for the given ID. */
export async function getContribution(req, res) {
  try {
    const results = await db.contribution.findOne({
      where: { ContributionId: req.params.id }
    })
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contribution.")
    return
  }
}

/* Returns the contributions for a given candidate, with limit and offset. */
export async function getContributionsForCandidate(req, res) {
  try {
    const order = orderFormatter(req.query.order)
    const results = await db.contribution.findAll({
      where: { CandidateId: req.params.id },
      limit: req.query.limit,
      offset: req.query.offset,
      order: order
    })
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contributions for candidate.")
    return
  }
}

/* Returns the contributions for a given contributor, with limit and offset. */
export async function getContributionsForContributor(req, res) {
  try {
    const order = orderFormatter(req.query.order)
    const results = await db.contribution.findAll({
      where: { ContributorId: req.params.id },
      limit: req.query.limit,
      offset: req.query.offset,
      order: order
    })
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contributions for contributor.")
    return
  }
}
