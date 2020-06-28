const express = require('express');
const DrinkService = require('./drink-service');

const drinkRouter = express.Router();
const bodyParser = express.json();

drinkRouter
	.route('/')
	// get drinks from all users
	.get( async (req, res) => {
		const drink = await DrinkService.getDrinks(req.app.get('db'))
		res.send(drink)
	})
	// post new drink
	.post(bodyParser, async (req, res, next) => {
		const { name, volume, price, quantity } = req.body
		const newDrink = {
			name,
			volume,
			price,
			quantity
		}
		const dbResponse = await DrinkService.insertDrink(req.app.get('db'), newDrink)
		res.json(dbResponse)
	})
	// delete drink by name
	.delete(bodyParser, async (req, res) => {
		const { name } = req.body
		const dbResponse = await DrinkService.deleteDrink(req.app.get('db'), name)
		res.send(dbResponse)
	})

module.exports = drinkRouter;