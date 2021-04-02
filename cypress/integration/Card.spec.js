context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('Moves the cards down when they are visible after scrolling', () => {
    cy.get('.cards__card').should('not.have.class', 'slide');
    cy.get('.cards').scrollIntoView().should('be.visible');
    cy.get('.cards__card').should('have.class', 'slide');
  });
});
