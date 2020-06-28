const express = require('express');
const DrinkService = require('./drink-service');

const drinkRouter = express.Router();

drinkRouter
	.route('/')
	// get drinks from all users
	.get( async (req, res) => {
		const drink = await DrinkService.getDrinks(req.app.get('db'))
		res.send(drink)
	})
	// post new drink

module.exports = drinkRouter;