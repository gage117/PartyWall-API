const app = require('./app');
const knex = require('knex');
const { PORT, DATABASE_URL } = require('./config');

// Create knex instance
const db = knex({
  client: 'pg',
  connection: DATABASE_URL
});

// Set knex instance in app for easy access
app.set('db', db);

// Start server on given PORT
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});