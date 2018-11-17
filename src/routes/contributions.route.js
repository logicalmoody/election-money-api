import { db } from "../db/db"

/* Returns all contributions. */
export async function getAllContributions(req, res) {
    try {
        const results = await db.contribution.findAll()
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
        if (!("id" in req.query)) {
            res.status(400).send("Bad Request: Missing contribution ID.")
            return
        }
        const results = await db.contribution.findOne({ where: { ContributionId: req.query.id } })
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
        if (!("id" in req.query)) {
            res.status(400).send("Bad Request: Missing candidate ID.")
            return
        }
        const results = await db.contribution.findAll({
            where: { CandidateId: req.query.id },
            limit: req.query.limit,
            offset: req.query.offset
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
        if (!("id" in req.query)) {
            res.status(400).send("Bad Request: Missing contributor ID.")
            return
        }
        const results = await db.contribution.findAll({
            where: { ContributorId: req.query.id },
            limit: req.query.limit,
            offset: req.query.offset
        })
        res.status(200).json(results)
        return
    } catch (error) {
        console.error(error)
        res.status(500).send("Error getting contributions for contributor.")
        return
    }
}
