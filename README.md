# Text storing and processing backend challenge

I got this Backend Challenge as I was applying for a job opportunity, the time given to complete this challenge was 4 days, the challenge prompt was :

```text
Our platform deals mostly with text storing and processing with different languages ie:
Arabic, English and French. We want to make sure you have a fundamental understanding of
JavaScript and Node.js. Can you build a simple rest API that allows CRUD operations on texts
while each text contains three versions: French, English, Arabic?

Endpoints:
● POST /text/
Upload and store text with unique Id to database (you can simulate a database using json
files, or use standalone mongoDB container)
● GET /text/
Fetch list of text with the support of pagination
● PUT /text/:textId
Update text content
● GET /text/:textId/count
Fetch total word number of given a text
● GET /text/:textId/count/:language
Fetch total word number based on given text for specific languages ex: fr, ar, en
● POST /text/search?q=
Fetch text based on fuzzy search using query q
● GET /text/mostOccurrent
Get the most recurrent word in the whole text database

NB:
● Each endpoint should have its own test.
● You are free to use any Node.js framework / package.
● You are free to choose between JS or TS.
● Front-end side is not required.
● Once you are done, publish your code to a public Github repository then share with us the
link.

You’ll be judged on code quality, readability and clean architecture.
```

## Demo

https://text-storing-processing.onrender.com

## API Reference

### Upload and store text with unique Id to database

```http
  POST /text/
```

| Parameter | Type     | Description                                                                                         |
| :-------- | :------- | :-------------------------------------------------------------------------------------------------- |
| `text`    | `object` | **Required**. text object containing `version`, which in turn has 3 properties : `en` `fr` and `ar` |

### Fetch list of text with the support of pagination

```http
  GET /text/
```

| Parameter | Type                     | Description                     |
| :-------- | :----------------------- | :------------------------------ |
| limit     | query parameter `number` | **Optional**. desired page size |
| page      | query parameter `number` | **Optional**. desired page      |

### Update text content

```http
  PUT /text/:textId
```

| Parameter | Type               | Description                                                      |
| :-------- | :----------------- | :--------------------------------------------------------------- |
| `textId`  | MongoDB `ObjectId` | **Required**. valid MongoDB ObjectId that exists in the database |

### Fetch total word number of given a text

```http
  GET /text/:textId/count
```

| Parameter | Type               | Description                                                      |
| :-------- | :----------------- | :--------------------------------------------------------------- |
| `textId`  | MongoDB `ObjectId` | **Required**. valid MongoDB ObjectId that exists in the database |

### Fetch total word number based on given text for specific languages ex: fr, ar, en

```http
  GET /text/:textId/count/:language
```

| Parameter  | Type               | Description                                                                        |
| :--------- | :----------------- | :--------------------------------------------------------------------------------- |
| `textId`   | MongoDB `ObjectId` | **Required**. valid MongoDB ObjectId that exists in the database                   |
| `language` | `string`           | **Required**. valid code language, currently only `en` `fr` and `ar` are supported |

### Fetch text based on fuzzy search using query q

```http
  POST /text/search?q=
```

| Parameter | Type                     | Description                                     |
| :-------- | :----------------------- | :---------------------------------------------- |
| `q`       | query parameter `string` | **Required**. pattern to search in the database |

### Get the most recurrent word in the whole text database

```http
  GET /text/mostOccurrent
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
| /         | /    | /           |

## Scripts

- `npm install` : install dependencies
- `npm start` : run the server
- `npm run devserver` : start the server in dev mode (restart the server on each save)

## Project Structure

- `src/`:
  - `helpers/` : folder containing helper classes and functions to use all over the project
  - `models/` : folder containing mongoose models to provide an interface to the MongoDB database for creating, querying, updating and deleting documents
  - `routes/api/text/`: folder containing application’s endpoints (URIs) to respond to requests, contains a RESTful API to work on texts ressources.
  - `database.js` : contains code for Database connection
  - `server.js` : file that initialize the server and glues everything together
- `testEndpoints/` : folder containing `.rest` files for endpoints tests, requires Rest Client extension to be installed in VSCode, or hit the endpoints inside `.rest` files via any other API Client (example: Postman)

## Test Endpoints

- Rest client extension must be installed in VSCode, to fire requests from `.rest` files inside `testEnpoints/` folder
- Using the URLs to hit the endpoints inside `.rest` files is possible via any other API Client (example: Postman)

## Usage

- Running locally the project won't work because of the `DB_CONNECTION` environmental variable inside `.env` file , and the `.env` file was ignored when pushing the code to GitHub repo.
- Use the Heroku Live Demo link to use the app: https://text-storing-processing.herokuapp.com/

## Lessons Learned

- REST Client VSCode extension Usage
- When in a rush, use familiar technologies, I had 4 days to accomplish this coding challenge. I was new to Typescript, I thought it was a good idea to use Typescript, until I stumbled upon some type inference problems, I wasted half a day trying to solve the problem until I decided to get back to Javascript in which I was more comfortable working with
- First make things work, then prettify (clean the code)

## Tech Stack

- `node.js`
- `express.js`
- `MongoDB Atlass`
- `mongoose`
- `Fuse.js`: for fuzzy search
- `jslingua`: for text splitting
- `pagination-apis`: for pagination

## Authors

Built with <3 and excitement by [@salimdellali](https://github.com/salimdellali)

## Acknowledgements

This README was build using https://readme.so/
