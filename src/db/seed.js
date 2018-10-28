import { db } from "./db"

const seedCandidates = [
	{
		FilerId: "123456",
		Status: 1,
		ElectionType: 2,
		ElectionYear: 2018,
		FirstName: "Test",
		MiddleName: "Mc",
		LastName: "Candidate",
		Suffix: "Jr",
		CommitteeName: "Test Committee",
		Address: "321 Test Lane",
		Party: "Test Party"
	}
]

const seedContributors = [
	{
		FirstName: "Test",
		LastName: "Contributor",
		Address: "123 Test Road",
		City: "Test City",
		State: "TS",
		Zip: "12345",
		PAC: "test",
		Occupation: "Tester",
		Employer: "Test INC"
	}
]

const seedContributions = [
	{
		CandidateId: 1,
		ContributorId: 1,
		FilerId: 123,
		ScrapeLogId: 231,
		ContributionType: "Monetary",
		ContributionDate: new Date(),
		Amount: 123.45,
		Description: "donation my dude"
	}
]

export const seed = async () => {
	await db.init()
	await db.candidate.bulkCreate(seedCandidates, { individualHooks: true })
	await db.contributor.bulkCreate(seedContributors, { individualHooks: true })
	await db.contribution.bulkCreate(seedContributions, { individualHooks: true })
}
