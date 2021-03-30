context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('Skip link works', () => {
    cy.get('main').should('not.be.inViewport');
    cy.get('.skip').click({ force: true });
    cy.get('main').should('be.inViewport');
  });

  it.only('Nav links work', () => {
    //First link is to home
    //So we go to houses
    cy.get('.menu-links > li > a').eq(1).click();
    cy.url().should('eq', 'http://localhost:1234/houses');

    //Now we can go to home
    cy.get('.menu-links > li > a').eq(0).click();
    cy.url().should('eq', 'http://localhost:1234/');

    //And buildings
    cy.get('.menu-links > li > a').eq(2).click();
    cy.url().should('eq', 'http://localhost:1234/buildings');

    //And offices
    cy.get('.menu-links > li > a').eq(3).click();
    cy.url().should('eq', 'http://localhost:1234/offices');
  });
});
