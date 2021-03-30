context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('Skip link works', () => {
    cy.get('main').should('not.be.inViewport');
    cy.get('.skip').click({ force: true });
    cy.get('main').should('be.inViewport');
  });
});
