import express from "express"
import {
  getAllCandidates,
  getCandidate,
  getCandidatesForContributor
} from "./candidates.route"
import {
  getAllContributors,
  getContributor,
  getContributorsForCandidate
} from "./contributors.route"
import {
  getAllContributions,
  getContribution,
  getContributionsForCandidate,
  getContributionsForContributor
} from "./contributions.route"
import { getLogs } from "./log.route.js"

export const router = express.Router()

/* Get all. */
router.get("/candidates", getAllCandidates)
router.get("/contributors", getAllContributors)
router.get("/contributions", getAllContributions)

/* Get by ID. */
router.get("/candidate/:id", getCandidate)
router.get("/contributor/:id", getContributor)
router.get("/contribution/:id", getContribution)

/* Get by relation. */
router.get("/candidate/:id/contributors", getContributorsForCandidate)
router.get("/contributor/:id/candidates", getCandidatesForContributor)

router.get("/candidate/:id/contributions", getContributionsForCandidate)
router.get("/contributor/:id/contributions", getContributionsForContributor)

/* Get logs by start/end date. */
router.get("/logs", getLogs)
