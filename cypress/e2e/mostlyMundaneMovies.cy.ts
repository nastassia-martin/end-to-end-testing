describe('Mostly Mundane Movies', { defaultCommandTimeout: 10000 }, () => {
  beforeEach(() => {
    cy.visit('/')
  })
  context('Movie Search', () => {
    it('Cant search without entering a title', () => {
      // go to search bar in form
      // press / hit enter
      // do not a title 
      // a message should show up 
      // message should stay there?
      cy.get('[type="submit"]').click()
      cy.get('.fade')
        .should('be.visible')
        // should have 2 children
        .should('have.class', 'alert')
        .should('have.descendants', 'div')
        .should('have.descendants', 'p')
      cy.get('.alert-heading')
        .should('have.class', 'alert-heading h4')     //.should('have.text', ' You tried to search, good for you! 👀')
        .contains("Aww, that's cute")
      cy.get('p')
        .should('have.text', 'You tried to search, good for you! 👀')
    })
  })
})