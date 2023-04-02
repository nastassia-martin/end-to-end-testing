describe('Mostly Mundane Movies', { defaultCommandTimeout: 10000 }, () => {
  beforeEach(() => {
    cy.visit('/')
  })
  context('Movie Search', () => {
    it("Cant search without entering a title", () => {
      cy.get('[type="submit"]').click()
      cy.get('.fade')
        .should('be.visible')
        .contains("Aww, that's cute")
      cy.get('p')
        .should('have.text', 'You tried to search, good for you! 👀')
    })
    it("Can't search without entering at least 3 characters", () => {
      cy.get('.form-control').type('Us')
      cy.get('[type="submit"]').click()
      cy.get('.fade')
        .should('be.visible')
        .contains('Wow, that was stupid')
      cy.get('p')
        .should('have.text', 'Search query must be at least 3 characters long, duh ^^ 🙄')
    })
    it('Can search for "The Matrix" and get at least 3 number of hits', () => {
      cy.get('.form-control').type('The Matrix')
      cy.get('[type="submit"]').click()
      cy.get('#loading-wrapper > .my-5').should('be.visible')
      cy.get('.movie-list')
        .find(">.movie-list-item")
        .should('have.length.at.least', 3)
      cy.get('.card-title')
        .should('contain', 'The Matrix')
    })
    it('While searching, a loading spinner should appear', () => {
      cy.get('.form-control').type('Enemy of the State')
      cy.get('[type="submit"]').click()
      cy.get('#loading-wrapper > .my-5').should('be.visible')
      // should show list of movies, or only the spinner?
    })
    it('click on the first search result and the page you end up on must match the ID of the film', () => {
      cy.get('.form-control').type('the matrix')
      cy.get('[type="submit"]').click()
      cy.get('#loading-wrapper > .my-5').should('be.visible')
      // cy.get('.movie-list') //try movie-list-item instead
      cy.get('.movie-list-item')
        .first()
        .children()
        //   // // .should('have.attr', 'data-imdb-id')
        .invoke('attr', 'data-imdb-id')
        .then((imbdId) => {
          cy.log(`Got me some imbdId: ${imbdId}`)

          cy.get(':nth-child(1) > .card > .card-body > .card-link')          //       //   .first()
            .click()
          cy.location('pathname').should('equal', '/movies/tt0133093')

        })

      // cy.get('[data-imdb-id="tt0133093"]')
      //   .find('a').click()
      //   .location('pathname').should('equal', '/movies/tt0133093')
      //cy.get(':nth-child(1) > .card > .card-body > .card-link').click()
    })
    it('Can search for "Isaks Memes" and get no hits (sad)', () => {
      cy.get('.form-control').type('Isaks Memes')
      cy.get('[type="submit"]').click()
      cy.get('#loading-wrapper > .my-5').should('be.visible')
      cy.get('.fade').should('be.visible').contains('Movie not found!')
    })
    it('If you search for "the postman always rings twice", then the request should make a timeout', () => {
      cy.get('.form-control').type('the postman always rings twice')
      cy.get('[type="submit"]').click()
      cy.get('#loading-wrapper > .my-5').should('be.visible')
      cy.get('.fade').should('be.visible').contains('👀')
      cy.get('p').contains('Does he, really?')
    })
    it('enter the path for the movie with id tt1337, an error message should be displayed (a shame)', () => {
      cy.visit('https://mostly-mundane-movies.netlify.app/movies/tt1337')
      cy.get('.fade').should('contain', 'LOL, what a fail')
      cy.get('p').should('contain', 'Haxx0r now, are we?')
    })
    it('error message displayed if page that does not exist', () => {
      cy.visit('https://mostly-mundane-movies.netlify.app/cats')
      cy.get('.alert-heading').should('contain', "It's not us, it's you")
      cy.get('p').should('contain', 'That page does not exist. You should be ashamed of yourself.')
      cy.get('.btn').should('contain', '👶🏻 I want my mommy')
        .click()
      cy.location('pathname').should('equal', '/')


    })
  })
})