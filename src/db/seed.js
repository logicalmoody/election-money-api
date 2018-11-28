import { db } from "./db"

const seedCandidates = [
	{
		FilerId: "123",
		Status: 1,
		ElectionType: 2,
		ElectionYear: 2018,
		FirstName: "Left",
		MiddleName: "Test",
		LastName: "Candidate",
		Suffix: "Jr",
		CommitteeName: "Test Committee 2",
		Address: "321 Test Lane",
		Party: "New Test Party"
	},
	{
		FilerId: "456",
		Status: 1,
		ElectionType: 2,
		ElectionYear: 2016,
		FirstName: "Right",
		MiddleName: "Test",
		LastName: "Candidate",
		Suffix: "Sr",
		CommitteeName: "Test Committee 1",
		Address: "654 Test Lane",
		Party: "Test Party"
	}
]

const seedContributors = [
	{
		FirstName: "Old",
		LastName: "Test-Contributor",
		Address: "123 Test Road",
		City: "Test City",
		State: "TS",
		Zip: "12345",
		PAC: "test",
		Occupation: "Tester",
		Employer: "Test INC"
	},
	{
		FirstName: "Young",
		LastName: "Test-Contributor",
		Address: "123 Test Road",
		City: "Test City",
		State: "TS",
		Zip: "54223",
		PAC: "test",
		Occupation: "Professional Dungeon Master",
		Employer: "Test INC"
	},
	{
		FirstName: "Middle-aged",
		LastName: "Test-Contributor",
		Address: "123 Test Road",
		City: "Test City",
		State: "TS",
		Zip: "00900",
		PAC: "test",
		Occupation: "Software Debugger",
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
		Description: "donation C"
	},
	{
		CandidateId: 2,
		ContributorId: 2,
		FilerId: 123,
		ScrapeLogId: 231,
		ContributionType: "Monetary",
		ContributionDate: new Date(),
		Amount: 0.45,
		Description: "donation B"
	},
	{
		CandidateId: 1,
		ContributorId: 2,
		FilerId: 123,
		ScrapeLogId: 231,
		ContributionType: "Monetary",
		ContributionDate: new Date(),
		Amount: 1.0,
		Description: "donation B"
	},
	{
		CandidateId: 1,
		ContributorId: 3,
		FilerId: 123,
		ScrapeLogId: 231,
		ContributionType: "Monetary",
		ContributionDate: new Date(),
		Amount: 54,
		Description: "donation C"
	}
]

export const seed = async () => {
	await db.init()
	await db.candidate.bulkCreate(seedCandidates, { individualHooks: true })
	await db.contributor.bulkCreate(seedContributors, { individualHooks: true })
	await db.contribution.bulkCreate(seedContributions, { individualHooks: true })
}
