export const candidate = (sequelize, Sequelize) => {
    return sequelize.define("Candidate", {
        CandidateId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        FilerId: {
            type: Sequelize.STRING(20)
        },
        Status: {
            type: Sequelize.ENUM("Active") // add more here
        },
        ElectionType: {
            type: Sequelize.ENUM("General", "Run-Off General")
        },
        ElectionYear: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        FirstName: {
            type: Sequelize.STRING(500)
        },
        MiddleName: {
            type: Sequelize.STRING(500)
        },
        LastName: {
            type: Sequelize.STRING(500)
        },
        Suffix: {
            type: Sequelize.STRING(100)
        },
        CommitteeName: {
            type: Sequelize.STRING(1000)
        },
        Address: {
            type: Sequelize.STRING(1000)
        },
        Party: {
            type: Sequelize.STRING(500)
        }
    })
}
