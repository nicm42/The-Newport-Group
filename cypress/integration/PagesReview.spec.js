context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/houses');
  });

  it('Moves the cards down when they are visible after scrolling', () => {
    cy.get('.pageReview__image').should('not.have.class', 'slide');
    cy.get('.pageReview__quote').should('not.have.class', 'slide');
    cy.get('.pageReview').scrollIntoView().should('be.visible');
    cy.get('.pageReview__image').should('not.have.class', 'slide');
    cy.get('.pageReview__quote').should('have.class', 'slide');
  });
});
