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
