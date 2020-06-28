const FoodService = {
	// get all foods from food table
	getFoods(db) {
		return db('foods')
			.select('*')
	},
	// insert a new food
	insertFood(db, newFood) {
	  return db
		.insert(newFood)
		.into('foods')
		.returning('*')
		.then(([food]) => food);
	},
	// delete a food by name
	deleteFood(db, foodName) {
		return db
			.where({name: foodName})
			.del()
	}
}

module.exports = FoodService