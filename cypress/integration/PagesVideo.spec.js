context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/houses');
  });

  it('Checks the video initial setup', () => {
    cy.get('video').should('have.length', 2);
    cy.get('video').its('0.paused').should('equal', true);
    cy.get('video').its('0.paused').should('equal', true);
  });

  it('Checks the video sources', () => {
    //Can't test for exact match on these because Parcel adds random characters to the ends
    //It's already on the houses page before each test
    cy.get('source')
      .eq(0)
      .should('have.attr', 'src')
      .and('contain', 'lake-house');
    cy.get('source').eq(1).should('have.attr', 'src').and('contain', 'villa');

    //Now test buildings page's videos
    cy.visit('http://localhost:1234/buildings');
    cy.get('source')
      .eq(0)
      .should('have.attr', 'src')
      .and('contain', 'empty-room');
    cy.get('source')
      .eq(1)
      .should('have.attr', 'src')
      .and('contain', 'lake-house-top');

    //Now test offices page's videos
    cy.visit('http://localhost:1234/offices');
    cy.get('source')
      .eq(0)
      .should('have.attr', 'src')
      .and('contain', 'open-working');
    cy.get('source')
      .eq(1)
      .should('have.attr', 'src')
      .and('contain', 'lights-out');
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
    cy.get('video').eq(0).click({ force: true });
    cy.get('video').its('0.paused').should('equal', true);
    cy.get('video').its('1.paused').should('equal', true);
  });

  it('Checks the video plays and pauses on spacebar and enter', () => {
    //Have to focus on the video first
    //But can only use focus on focusable elements
    //So we'll first click on it, which will give it focus and start it playing
    cy.get('video').its('0.paused').should('equal', true);
    cy.get('video').its('0.paused').should('equal', true);
    cy.get('video').eq(0).click({ force: true });
    cy.get('video').its('0.paused').should('equal', false);

    //Spacebar should now pause it
    cy.get('video').eq(0).trigger('keypress', { keyCode: '32', force: true });
    cy.get('video').its('0.paused').should('equal', true);
    //and play it again
    cy.get('video').eq(0).trigger('keypress', { keyCode: '32', force: true });
    cy.get('video').its('0.paused').should('equal', false);

    //Now try the same for enter
    /*cy.get('video').eq(0).trigger('keypress', { keyCode: '13', force: true });
    cy.get('video').its('0.paused').should('equal', true);
    //and play it again
    cy.get('video').eq(0).trigger('keypress', { keyCode: '13', force: true });
    cy.get('video').its('0.paused').should('equal', false); */

    //It shouldn't do anything at all for any other random key
    cy.get('video').eq(0).trigger('keypress', { keyCode: '60', force: true });
    cy.get('video').its('0.paused').should('equal', false);
  });
});
