context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/houses');
  });

  it('Checks the video initial setup', () => {
    cy.get('video').should('have.length', 2);
    cy.get('video').its('0.paused').should('equal', true);
    cy.get('video').its('0.paused').should('equal', true);
  });

  it('Checks the video plays and pauses on button click', () => {
    //Menu is the first button on the page and Light/Dark the second
    //so to trigger the first video we want to use the third button
    cy.get('button').eq(2).click();
    cy.get('video').its('0.paused').should('equal', false);
    cy.get('video').its('1.paused').should('equal', true);
    cy.get('button').eq(2).click();
    cy.get('video').its('0.paused').should('equal', true);
    cy.get('video').its('1.paused').should('equal', true);
  });

  it('Checks the video plays and pauses on video click', () => {
    //It's not happy that the button is on the video
    //So we have to force it to click
    cy.get('video').its('0.paused').should('equal', true);
    cy.get('video').its('0.paused').should('equal', true);
    cy.get('video').eq(0).click({ force: true });
    cy.get('video').its('0.paused').should('equal', false);
    cy.get('video').its('1.paused').should('equal', true);
    cy.get('button').eq(0).click({ force: true });
    //cy.get('video').its('0.paused').should('equal', true);
    //cy.get('video').its('1.paused').should('equal', true);
  });
});
