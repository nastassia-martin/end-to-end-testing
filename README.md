# Assignment in End to End in Cypress


## Tests to run: 
### G
[x] Can't search without entering a title
[x] Can't search without entering at least 3 characters
https://www.imdb.com/list/ls046446209/
[x] Can search for "The Matrix" and get at least X number of hits
[x] While searching, a loading spinner should appear
[x] Can click on the first search result (when the page has finished loading) and the page you end up on must match the ID of the film (via a data attribute)

### VG
[x] Can search for "Isaks Memes" and get no hits (sad)
[x] If you search for "the postman always rings twice", then the request should make a timeout
[x] If you enter the path for the movie with id tt1337, an error message should be displayed (a shame)
[x] If you go to a page that does not exist, an error message should be displayed
[x] Mocha search request for "The Matrix" and get request for the movie "The Matrix" in Cypress (there are two different requests) and respond with data from two fixtures

### Comments
Intercept tests should be refactored. 