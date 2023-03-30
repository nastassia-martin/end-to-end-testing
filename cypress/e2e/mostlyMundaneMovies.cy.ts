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
      cy.get('.movie-list')
        .find(">.movie-list-item")
        .should('have.length.at.least', 3)
      cy.get('.card-title')
        .should('contain', 'The Matrix')
    })

  })
})