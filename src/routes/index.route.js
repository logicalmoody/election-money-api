import express from "express"
import { getAllCandidates, getCandidate, getCandidatesForContributor } from "./candidates.route"
import { getAllContributors, getContributor, getContributorsForCandidate } from "./contributors.route"
import { getAllContributions, getContribution } from "./contributions.route"

export const router = express.Router()

/* Get all. */
router.get("/candidates", getAllCandidates)
router.get("/contributors", getAllContributors)
router.get("/contributions", getAllContributions)

/* Get by ID. */
router.get("/candidate", getCandidate)
router.get("/contributor", getContributor)
router.get("/contribution", getContribution)

/* Get by relation. */
router.get("/candidate/contributors", getContributorsForCandidate)
router.get("/contributor/candidates", getCandidatesForContributor)
