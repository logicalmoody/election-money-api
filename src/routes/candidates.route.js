import { db } from "../db/db"

export async function getAllCandidates(req, res) {
    try {
        const results = await db.candidate.findAll()
        res.status(200).json(results)
        return
    } catch (error) {
        console.error(error)
        res.status(500).send("Error getting candidates.")
        return
    }
}

export async function getCandidate(req, res) {
    try {
        if (!("id" in req.query)) {
            res.status(400).send("Bad Request: Missing candidate ID.")
            return
        }
        const results = await db.candidate.findOne({ where: { CandidateId: req.query.id } })
        res.status(200).json(results)
        return
    } catch (error) {
        console.error(error)
        res.status(500).send("Error getting candidate.")
        return
    }
}
