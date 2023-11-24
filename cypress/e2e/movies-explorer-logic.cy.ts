

describe('Movies Explorer Logic Tests', () => {

    it('1. Visit Movies Explorer page', () => {
        cy.login();
    });

    it('2. Items per page', () => {

        // First check default number of cards - 10
        cy.get('movie-info-card').should('have.length', 10);

        // Change to 20
        cy.get('.mat-select-value').first().click();
        cy.get('.mat-select-panel mat-option').should('have.length', 3).eq(1).click();

         // Check number of cards after change - 20
         cy.get('movie-info-card').should('have.length', 20);

         // Change to 50
        cy.get('.mat-select-value').first().click();
        cy.get('.mat-select-panel mat-option').eq(2).click();

        // Check number of cards after change - 50
        cy.get('movie-info-card').should('have.length', 50);
    });

    it('2. Search', () => {

        // Search for 'ventura'
        cy.get('.search input').as('searchInput').type('ventura');

        cy.get('movie-info-card').should('have.length', 2);
        cy.get('@searchInput').clear();

        // Search for 'no-match'
        cy.get('@searchInput').type('no-match');
        cy.get('movie-info-card').should('have.length', 0);

        cy.get('.no-results-container').should('exist')
            .within(() => {
                cy.get('.message').contains('No movies found')
            });

        // Clear and check that all movies are visible
        cy.get('@searchInput').clear();
        cy.get('movie-info-card').should('have.length', 50);

    })
})