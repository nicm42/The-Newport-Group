context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('Skip link works', () => {
    cy.get('main').should('not.be.inViewport');
    cy.get('.skip').click({ force: true });
    cy.get('main').should('be.inViewport');
  });

  it('Nav links work', () => {
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

  it('Info links work', () => {
    //list links
    //For some reason it thinks the menu is covering everything
    cy.get('.info__list > li > a').eq(0).click({ force: true });
    cy.url().should('eq', 'http://localhost:1234/houses');

    //Need to go back to home page to check next link
    cy.visit('http://localhost:1234/');
    cy.get('.info__list > li > a').eq(1).click({ force: true });
    cy.url().should('eq', 'http://localhost:1234/buildings');

    //Need to go back to home page to check next link
    cy.visit('http://localhost:1234/');
    cy.get('.info__list > li > a').eq(2).click({ force: true });
    cy.url().should('eq', 'http://localhost:1234/offices');

    //paragraph links
    //Need to go back to home page to check next link
    cy.visit('http://localhost:1234/');
    cy.get('.info__text > p > a').eq(0).click({ force: true });
    cy.url().should('eq', 'http://localhost:1234/houses');

    //Need to go back to home page to check next link
    cy.visit('http://localhost:1234/');
    cy.get('.info__text > p > a').eq(1).click({ force: true });
    cy.url().should('eq', 'http://localhost:1234/offices');

    //Need to go back to home page to check next link
    cy.visit('http://localhost:1234/');
    cy.get('.info__text > p > a').eq(2).click({ force: true });
    cy.url().should('eq', 'http://localhost:1234/buildings');
  });

  it('Card links work', () => {
    cy.get('.cards__text > a').eq(0).click();
    cy.url().should('eq', 'http://localhost:1234/houses');

    //Need to go back to home page to check next link
    cy.visit('http://localhost:1234/');
    cy.get('.cards__text > a').eq(1).click();
    cy.url().should('eq', 'http://localhost:1234/buildings');

    //Need to go back to home page to check next link
    cy.visit('http://localhost:1234/');
    cy.get('.cards__text > a').eq(2).click();
    cy.url().should('eq', 'http://localhost:1234/offices');
  });

  it('Footer email is a mailto link to nowehere', () => {
    cy.get('.footer__contact a').should('have.attr', 'href', 'mailto:#');
  });
});
