/* Formats the request order in a sequelize-friendly format. */
export function orderFormatter(order) {
	if (order) {
		if (order.toLowerCase() === "asc") return [["Amount", "ASC"]]
		else if (order.toLowerCase() === "desc") return [["Amount", "DESC"]]
	}
	return null
}
