import { db } from "../db/db"

/* Returns all candidates, with limit and offset. */
export async function getAllCandidates(req, res) {
	try {
		const results = await db.candidate.findAll({
			limit: req.query.limit,
			offset: req.query.offset
		})
		res.status(200).json(results)
		return
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting candidates.")
		return
	}
}

/* Returns the candidate for the given ID. */
export async function getCandidate(req, res) {
	try {
		const results = await db.candidate.findOne({ where: { CandidateId: req.params.id } })
		res.status(200).json(results)
		return
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting candidate.")
		return
	}
}

/* Returns the candidates for a given contributor ID, with limit and offset. */
export async function getCandidatesForContributor(req, res) {
	try {
		const contributions = await db.contribution.findAll({
			where: { ContributorId: req.params.id },
			limit: req.query.limit,
			offset: req.query.offset
		})
		let promises = []
		contributions.forEach(con => promises.push(db.candidate.findOne({ where: { CandidateId: con.CandidateId } })))
		const results = await Promise.all(promises)
		res.status(200).json(results)
		return
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting candidates for the contributor.")
		return
	}
}
