const express = require('express');
const FoodService = require('./food-service');

const foodRouter = express.Router();
const bodyParser = express.json();

foodRouter
	.route('/')
	// get drinks from all users
	.get(async (req, res) => {
		const food = await FoodService.getFoods(req.app.get('db'))
		res.send(food)
	})
	// post new food
	.post(bodyParser, async (req, res, next) => {
		const { name, description, weight, price, quantity } = req.body
		const newFood = {
			name,
			description,
			weight,
			price,
			quantity
		}
		const dbResponse = await FoodService.insertFood(req.app.get('db'), newFood)
		res.json(dbResponse)
	})
	// delete food by name
	.delete(bodyParser, async (req, res) => {
		const { name } = req.body
		const dbResponse = await FoodService.deleteFood(req.app.get('db'), name)
		res.send(dbResponse)
	})

module.exports = foodRouter;