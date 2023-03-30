[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/cq9gSkna)
# FED22 Testning - Inlämningsuppgift 3

E2E-testing med Cypress.

## Instruktioner

1. Klona detta repo
2. Gå in i mappen
3. Kör `npm install`
4. Installera Cypress och konfigurera det
5. Skapa tester enligt kravspecifikationen


## Steps i took to start testing
1. went to inlamnings folder for testing.
2. cd into inlamning 3
3. cloned boilerplate from HR
4. npm install
5. npm install cypress --save-dev
6. npx cypress open
7. clicked e2e testing, select chrome
8. created new spec called mostlyMundateMovies
9. Created baseURL in cypress.config.ts (had to restart e2e testing)

## Tests to run: 
### G
[x] Can't search without entering a title
[] Can't search without entering at least 3 characters
[] Can search for "The Matrix" and get at least X number of hits
[] While searching, a loading spinner should appear
[] Can click on the first search result (when the page has finished loading) and the page you end up on must match the ID of the film (via a data attribute)

### VG
[] Can search for "Isaks Memes" and get no hits (sad)
[] If you search for "the postman always rings twice", then the request should make a timeout
[] If you enter the path for the movie with id tt1337, an error message should be displayed (a shame)
[] If you go to a page that does not exist, an error message should be displayed
[] Mocha search request for "The Matrix" and get request for the movie "The Matrix" in Cypress (there are two different requests) and respond with data from two fixtures