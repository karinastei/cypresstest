describe('Google Search', () => {
  it('should search for a term on Google', () => {
    // Open Google.com
    cy.visit('https://www.google.com');

     // Dismiss the cookie banner by clicking the button with the text "Keeldu kõigist"
     cy.get('button:contains("Keeldu kõigist")').click();

    // Type a search query in the search input field and submit it
    cy.get('[name="q"]').type('ducks');

    //Find the enter button and click on the first one
    cy.get('input[value="Google otsing"]').eq(0).click();

    // Wait for the search results to load
    cy.get('#search').should('be.visible');

    // Assert that the search results contain the text "Cypress Testing"
    cy.get('.g').should('contain', 'Cypress Testing');
  });
});
