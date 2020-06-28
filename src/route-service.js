const RouteService = {
	// get all foods from food table
	getFoods(db) {
		return db('foods')
			.select('*')
	},
	// get all drinks from drinks table
	getDrinks(db) {
		return db('drinks')
			.select('*')
	}
}

module.exports = RouteService