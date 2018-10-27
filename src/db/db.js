import Sequelize from "sequelize"
const env = process.env.NODE_ENV || "development"

let sequelize
if (env === "development") {
	sequelize = new Sequelize({
		host: "localhost",
		dialect: "sqlite",
		storage: ":memory:"
	})
	console.log("Configured local SQLite database.")
} else {
	// Set up Azure connection here
	// sequelize = ...
	console.log("Configured remote Azure database.")
}

sequelize
	.authenticate()
	.then(() => console.log("Connection established to the database."))
	.catch(err => ("Unable to connect to the database:", err))

export const db = {
	sequelize: sequelize,
	Sequelize: Sequelize
}
