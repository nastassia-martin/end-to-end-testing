describe('Mostly Mundane Movies', { defaultCommandTimeout: 10000 }, () => {
  beforeEach(() => {
    cy.visit('/')
  })
  context('Movie Search', () => {
    it("Cant search without entering a title", () => {
      // press / hit enter
      // do not a title 
      // a message should show up 
      // message should stay there?
      cy.get('[type="submit"]').click()
      cy.get('.fade')
        .should('be.visible')
        .should('have.class', 'alert')
        .should('contain.html', 'div')
        .and('contain.html', 'p')
        .should('have.attr', 'role')
      cy.get('.alert-heading')
        .should('have.class', 'alert-heading h4')     //.should('have.text', ' You tried to search, good for you! 👀')
        .contains("Aww, that's cute")
      cy.get('p')
        .should('have.text', 'You tried to search, good for you! 👀')
    })
    it("Can't search without entering at least 3 characters", () => {
      // go to search bar in form
      // press / hit enter
      // do not a title 
      // a message should show up - very aggressive?==?????
      // message should stay there?
      cy.get('.form-control').type('Us')
      cy.get('[type="submit"]').click()
      cy.get('.fade')
        .should('be.visible')
        //.contains("Wow, that was stupid") ==> crash! 
        .should('contain.html', 'div')
        .and('contain.html', 'p')
        .should('have.class', 'alert')
        .should('have.attr', 'role')
      cy.get('.alert-heading')
        .should('have.class', 'alert-heading h4')
        .contains("Wow, that was stupid")
      cy.get('p')
        .should('have.text', 'Search query must be at least 3 characters long, duh ^^ 🙄')
    })
    it.skip('Can search for "The Matrix" and get at least X number of hits')
  })
})