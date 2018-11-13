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
