const DrinkService = {
	// get all Drinks from Drink table
	getDrinks(db) {
		return db('drinks')
			.select('*')
	},
}

module.exports = DrinkService