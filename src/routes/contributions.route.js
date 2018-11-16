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
