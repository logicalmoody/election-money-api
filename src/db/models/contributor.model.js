export const contributor = (sequelize, Sequelize) => {
	return sequelize.define("Contributor", {
		ContributorId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		LastName: {
			type: Sequelize.STRING(500)
		},
		FirstName: {
			type: Sequelize.STRING(500)
		},
		Address: {
			type: Sequelize.STRING(500)
		},
		City: {
			type: Sequelize.STRING(500)
		},
		State: {
			type: Sequelize.STRING(2)
		},
		Zip: {
			type: Sequelize.STRING(12)
		},
		PAC: {
			type: Sequelize.STRING(1000)
		},
		Occupation: {
			type: Sequelize.STRING(500)
		},
		Employer: {
			type: Sequelize.STRING(1000)
		}
	})
}
