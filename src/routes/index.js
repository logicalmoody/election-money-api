import express from "express"
import { Contributor } from "../db/models/contributor.model"
import { Candidate } from "../db/models/candidate.model"

export const router = express.Router()

router.get("/contributors", async (req, res) => {
	try {
		const results = await Contributor.findAll()
		res.status(200).json(results)
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting contributors.")
	}
})

router.get("/candidates", async (req, res) => {
	try {
		const results = await Candidate.findAll()
		res.status(200).json(results)
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting candidates.")
	}
})
