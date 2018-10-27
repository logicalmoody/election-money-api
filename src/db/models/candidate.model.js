import { db } from "../db"

export const Candidate = db.sequelize.define(
	"Candidate",
	{
		CandidateId: {
			type: db.Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		FilerId: {
			type: db.Sequelize.STRING
		},
		OfficeId: {
			type: db.Sequelize.INTEGER
		},
		Status: {
			type: db.Sequelize.INTEGER
		},
		ElectionType: {
			type: db.Sequelize.INTEGER
		},
		ElectionYear: {
			type: db.Sequelize.INTEGER
		},
		FirstName: {
			type: db.Sequelize.STRING
		},
		MiddleName: {
			type: db.Sequelize.STRING
		},
		LastName: {
			type: db.Sequelize.STRING
		},
		Suffix: {
			type: db.Sequelize.STRING
		},
		CommitteeName: {
			type: db.Sequelize.STRING
		},
		Address: {
			type: db.Sequelize.STRING
		},
		Party: {
			type: db.Sequelize.STRING
		}
	},
	{
		validate: {
			hasElectionYear() {
				if (this.ElectionYear === null) throw new Error("ElectionYear is a required field!")
			}
		}
	}
)

Candidate.sync({ force: true }).then(() => {
	return Candidate.create({
		FilerId: "123456",
		OfficeId: 123,
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
	})
})
