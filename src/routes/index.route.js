import express from "express"
import { getAllCandidates } from "./candidates.route"
import { getAllContributors } from "./contributors.route"
import { getAllContributions } from "./contributions.route"

export const router = express.Router()

router.get("/candidates", getAllCandidates)
router.get("/contributors", getAllContributors)
router.get("/contributions", getAllContributions)
