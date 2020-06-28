# PartyWall API

PartyWall API is used to store and retrieve items (food, drinks) they want to sell at parties.

## Possible Improvements
- Link user IDs in database to drinks and foods to retrieve a specifics users food or drinks instead of food or drinks of all users
- Create test files
- Add error handling if any field is missing during POST requests

## Set up

Complete the following steps to clone and set up PartyWall API:

1. Clone this repository to your local machine `git clone https://github.com/gage117/PartyWall-API.git`
2. `cd` into the cloned repository
3. Install the node dependencies `npm install`
4. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
5. Connect to your Postgres server (psql)
6. Create database named 'partywall' and set the owner to postgres (CREATE DATABASE partywall OWNER postgres;)
7. Migrate database with appropriate tables using the script 'npm run migrate'
8. Seed database by running the psql command 'psql -U postgres -d partywall -f ./seeds/seed.all_tables.sql'

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Routes
### /food
- GET returns list of food from all users
- POST expects a JSON object in the body containing name, description, weight, price, and quantity
- DELETE expects a JSON object in the body containing name
### /drinks
- GET returns list of drinks from all users
- POST expects a JSON object in the body containing name, volume, price, and quantity
- DELETE expects a JSON object in the body containing name

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
