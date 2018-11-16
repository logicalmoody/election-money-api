import { db } from "../db/db"

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

export async function getContributor(req, res) {
    try {
        if (!("id" in req.query)) {
            res.status(400).send("Bad Request: Missing contributor ID.")
            return
        }
        const results = await db.contributor.findOne({ where: { ContributorId: req.query.id } })
        res.status(200).json(results)
        return
    } catch (error) {
        console.error(error)
        res.status(500).send("Error getting contributor.")
        return
    }
}
