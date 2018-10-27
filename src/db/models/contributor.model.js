import { db } from "../db"

export const Contributor = db.sequelize.define("contributor", {
	ContributorId: {
		type: db.Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	LastName: {
		type: db.Sequelize.STRING
	},
	FirstName: {
		type: db.Sequelize.STRING
	},
	Address: {
		type: db.Sequelize.STRING
	},
	City: {
		type: db.Sequelize.STRING
	},
	State: {
		type: db.Sequelize.STRING
	},
	Zip: {
		type: db.Sequelize.STRING
	},
	PAC: {
		type: db.Sequelize.STRING
	},
	Occupation: {
		type: db.Sequelize.STRING
	},
	Employer: {
		type: db.Sequelize.STRING
	}
})

Contributor.sync({ force: true }).then(() => {
	return Contributor.create({
		FirstName: "Test",
		LastName: "Contributor",
		Address: "123 Test Road",
		City: "Test City",
		State: "TS",
		Zip: "12345",
		PAC: "test",
		Occupation: "Tester",
		Employer: "Test INC"
	})
})
