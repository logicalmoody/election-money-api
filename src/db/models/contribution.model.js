export const contribution = (sequelize, Sequelize) => {
	return sequelize.define("Contribution", {
		ContributionId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		FilerId: {
			type: Sequelize.STRING(20)
		},
		ScrapeLogId: {
			type: Sequelize.INTEGER
		},
		ContributionType: {
			type: Sequelize.ENUM("Monetary", "In-Kind")
		},
		ContributionDate: {
			type: Sequelize.DATE
		},
		Amount: {
			type: Sequelize.DECIMAL
		},
		Description: {
			type: Sequelize.STRING(1000)
		}
	})
}
