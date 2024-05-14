# End to End in Cypress

## About
This project is runs end to end (e2e) tests using Cypress. The purpose of the project was to become familiar with e2e testing. 

## Tests to run: 

- Can't search without entering a title
- Can't search without entering at least 3 characters
- Can search for "The Matrix" and get at least X number of hits
- While searching, a loading spinner should appear
-  Can click on the first search result (when the page has finished loading) and the page you end up on must match the ID of the film (via a data attribute)
- Can search for "Isaks Memes" and get no hits 
- If you search for "the postman always rings twice", then the request should make a timeout
- If you enter the path for the movie with id tt1337, an error message should be displayed (a shame)
-  If you go to a page that does not exist, an error message should be displayed
-  Mocha search request for "The Matrix" and get request for the movie "The Matrix" in Cypress (there are two different requests) and respond with data from two fixtures

## Set up

In your terminal run these commands:

1. `npm install`
2. `npm run dev`

To run the tests run:

`npm run test`

