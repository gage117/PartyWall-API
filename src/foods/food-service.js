const FoodService = {
	// get all foods from food table
	getFoods(db) {
		return db('foods')
			.select('*')
	},
}

module.exports = FoodService