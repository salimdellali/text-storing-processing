# Text storing and processing backend challenge

## Live Demo

- https://text-storing-processing.herokuapp.com/

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
- `testEndpoints/` : folder containing `.rest` files for endpoints tests, requires Rest Client extension to be installed in VSCode, or hit the endpoints inside `.rest` files via any other API Client (example: Postman)

## Test endpoints

- Rest client extension must be installed in VSCode, to fire requests from `.rest` files inside `testEnpoints/` folder
- Using the URLs to hit the endpoints inside `.rest` files is possible via any other API Client (example: Postman)

## Usage

- Running locally the project won't work because of the `DB_CONNECTION` environmental variable inside `.env` file , and the `.env` file was ignored when pushing the code to GitHub repo.
- Use the Heroku Live Demo link to use the app: https://text-storing-processing.herokuapp.com/

## Last note

- I had a lot of fun resolving this coding challenge, and I had the chance to learn a lot of stuff along the way.
- I was in such a rush to finish the coding challenge, I'm unfortunate to inform you that ,due to the Deadline (which was set on Thursday 08 July 2021 at 17:00), I wasn't able to code the `POST /text/search?q=` endpoint. I did my best :)
- Built with <3 and excitement by Salim Dellali
