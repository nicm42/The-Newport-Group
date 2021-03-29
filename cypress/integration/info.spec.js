context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('Moves the elements in when they are visible after scrolling', () => {
    cy.get('.info__list').should('not.have.class', 'slide');
    cy.get('.info__text').should('not.have.class', 'slide');
    cy.get('.info').scrollIntoView().should('be.visible');
    cy.get('.info__list').should('have.class', 'slide');
    cy.get('.info__text').should('have.class', 'slide');
  });
});
