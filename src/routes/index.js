import express from "express"
import { db } from "../db/db"

export const router = express.Router()

router.get("/contributors", async (req, res) => {
	try {
		const results = await db.contributor.findAll()
		res.status(200).json(results)
		return
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting contributors.")
		return
	}
})

router.get("/candidates", async (req, res) => {
	try {
		const results = await db.candidate.findAll()
		res.status(200).json(results)
		return
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting candidates.")
		return
	}
})

router.get("/contributions", async (req, res) => {
	try {
		const results = await db.contribution.findAll()
		res.status(200).json(results)
		return
	} catch (error) {
		console.error(error)
		res.status(500).send("Error getting contributions.")
		return
	}
})
