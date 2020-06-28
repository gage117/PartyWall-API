const DrinkService = {
	// get all Drinks from Drink table
	getDrinks(db) {
		return db('drinks')
			.select('*')
	},
	// insert a new drink
	insertDrink(db, newDrink) {
	  return db
		.insert(newDrink)
		.into('drinks')
		.returning('*')
		.then(([drink]) => drink);
	},
	// delete a drink by name
	deleteDrink(db, drinkName) {
		return db
			.where({name: drinkName})
			.del()
	}
}

module.exports = DrinkService