# PartyWall API

PartyWall API is used to store and retrieve items (food, drinks) they want to sell at parties.

## Possible Improvements
- Link user IDs in database to drinks and foods to retrieve a specifics users food or drinks instead of food or drinks of all users

## Set up

Complete the following steps to clone and set up PartyWall API:

1. Clone this repository to your local machine `git clone https://github.com/gage117/PartyWall-API.git`
2. `cd` into the cloned repository
3. Install the node dependencies `npm install`
4. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
5. Create Database and run Migrations

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
