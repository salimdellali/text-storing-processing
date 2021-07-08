# Text storing and processing backend challenge

## Scripts

- `npm install` : install dependencies
- `npm start` : run the server
- `npm run devserver` : start the server in dev mode (restart the server on each save)

## Project structure

- `src/`:
  - `helpers/` : folder containing helper classes and functions to use all over the project
  - `models/` : folder containing mongoose models to provide an interface to the MongoDB database for creating, querying, updating and deleting documents
  - `routes/api/text/`: folder containing application’s endpoints (URIs) to respond to requests, contains a RESTful API to work on texts ressources.
  - `database.js` : contains code for Database connection
  - `server.js` : file that initialize the server and glues everything together
- `testEndpoints/` : folder containing `.rest` files for endpoints tests, requires Rest Client extension to be installed in VSCode

## Test endpoints

- Rest client extension must be installed in VSCode, to fire requests from `.rest` files inside `testEnpoints/` folder
- Using the URLs to hit the endpoints inside `.rest` files is possible via any other API Client (example: Postman)

## Usage

- `DB_CONNECTION` environmental variable inside `.env` must containt the connection URL to MongoDB Atlass in order to work with the data , if you ever need to run my project, contact me and I'll send you the connection string, or I'll upload a Live Demo on Heroku for you

## Last note

I had a lot of fun resolving this coding challenge, and I had the chance to learn a lot of stuff along the way.

I was in such a rush to finish the coding challenge, I'm unfortunate to inform you that ,due to the Deadline (which was set on Thursday 08 July 2021 at 17:00), I wasn't able to code the `POST /text/search?q=` endpoint. I did my best :)

Built with <3 and excitement by Salim Dellali
