const express = require('express');
const FoodService = require('./food-service');

const foodRouter = express.Router();

foodRouter
	.route('/')
	// get drinks from all users
	.get( async (req, res) => {
		const food = await FoodService.getFoods(req.app.get('db'))
		res.send(food)
	})
	// post new food

module.exports = foodRouter;