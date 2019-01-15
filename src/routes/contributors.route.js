import { db } from "../db/db"

/* Returns all contributors */
export async function getAllContributors(req, res) {
  try {
    const results = await db.contributor.findAll()
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contributors.")
    return
  }
}

/* Returns the contributor for the given ID. */
export async function getContributor(req, res) {
  try {
    const results = await db.contributor.findOne({
      where: { ContributorId: req.params.id }
    })
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contributor.")
    return
  }
}

/* Returns the contributors for a given candidate ID, with limit and offset. */
export async function getContributorsForCandidate(req, res) {
  try {
    const contributions = await db.contribution.findAll({
      where: { CandidateId: req.params.id },
      limit: req.query.limit,
      offset: req.query.offset
    })
    let promises = []
    contributions.forEach(con =>
      promises.push(
        db.contributor.findOne({ where: { ContributorId: con.ContributorId } })
      )
    )
    const results = await Promise.all(promises)
    res.status(200).json(results)
    return
  } catch (error) {
    console.error(error)
    res.status(500).send("Error getting contributors for the candidate.")
    return
  }
}
