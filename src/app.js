require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const authRouter = require('./auth/auth-router');
const foodRouter = require('./foods/food-router');
const drinkRouter = require('./drinks/drink-router');

// Create express app
const app = express();


/**
 *  ***MIDDLEWARE***
 */
// Setup morgan option based on environment
const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

// cors middleware for allowing cross origin
app.use(cors());
// morgan middleware for logging information
app.use(morgan(morganOption));
// helmet middleware for hiding our server type
app.use(helmet());


/**
 *  ***ROUTES***
 */
// Route used for handling User Login
app.use('/auth', authRouter);
// Food route
app.use('/food', foodRouter);
// Route to get drinks from all users
app.use('/drinks', drinkRouter);

// Error Handler
app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = {error: {message: 'server error'}};
  } else {
    // eslint-disable-next-line no-console
    console.log(error);
    response = {message: error.message, error};
  }
  res.status(500).json(response);
});

module.exports = app;