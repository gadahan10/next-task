import { should } from "chai";


describe('Movies Explorer UI Tests', () => {

    const innerWidth: number = Cypress.config("viewportWidth");
    const innerWHeight: number = Cypress.config("viewportHeight");

    it('1. Visit Movies Explorer page', () => {
        cy.login();
    });

    it('2. Check title appearance', () => {
        cy.get('movies-explorer .title')
        .should('have.css', 'color', 'rgb(35, 31, 32)')
        .and('have.css', 'font-size', `${Math.min(80, 4.4 * innerWidth)}px`)
        .and('have.css', 'font-weight', '600')
        .and('have.css', 'text-align', 'center')
        .and('have.css', 'line-height', `${Math.min(66, 4 * innerWidth)}px`)
        .and('have.css', 'font-family', 'Arial');
    })

    it('2. Check Search & pagination appearance', () => {
        cy.get('movies-explorer .filters')
        .should('have.css', 'display', 'flex')
        .and('have.css', 'margin-top', '40px')
        .and('have.css', 'margin-bottom', '40px')
        .and('have.css', 'justify-content', 'space-between')
        .within(() => {

            // Pagination
            cy.get('.left mat-paginator')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .within(() => {
                cy.get('.mat-paginator-page-size')
                .should('have.css', 'display', 'flex')
                .and('have.css', 'align-items', 'baseline')
                .and('have.css', 'margin-right', '8px');

                cy.get('.mat-paginator-range-actions')
                .should('have.css', 'display', 'flex')
                .and('have.css', 'align-items', 'center')
            
            })

            // Search
            cy.get('.right .search')
            .should('have.css', 'display', 'flex')
            .and('have.css', 'background-color', 'rgb(255, 255, 255)')
            .and('have.css', 'padding-top', '10px')
            .and('have.css', 'padding-bottom', '10px')
            .and('have.css', 'padding-left', '20px')  
            .and('have.css', 'padding-right', '20px') 
            .and('have.css', 'border-radius', '40px')
            .within(() => {
                cy.get('input')
                .should('have.css', 'border', '0px none rgb(0, 0, 0)')
                .and('have.css', 'font-family', 'Arial')
                .and('have.css', 'font-size', '14px');

                cy.get('img').should('have.attr', 'src').and('include', 'search.svg')
            })
        })
        
    })

    it('3. Movie info card appearance', () => {
        cy.get('movie-info-card').first()
        .should('have.css', 'display', 'flex')
        .and('have.css', 'flex-direction', 'column')
        .and('have.css', 'align-items', 'center')
        .and('have.css', 'cursor', 'pointer')
        .within(() => {
            cy.get('.movie-card-container')
            .should('have.css', 'width', '260px') 
            .and('have.css', 'display', 'flex')
            .and('have.css', 'flex-direction', 'column')
            .and('have.css', 'align-items', 'flex-start')
            .and('have.css', 'row-gap', '16px') 
            .and('have.css', 'background-color', 'rgb(255, 255, 255)')
            .and('have.css', 'padding', '10px') 
            .and('have.css', 'border-radius', '10px')
            .within(() => {
                // Movie image
                cy.get('.image-wrapper img').should('exist')

                // Movie title
                cy.get('.title')
                .should('have.css', 'width', '260px')
                .and('have.css', 'height', '65px') 
                .and('have.css', 'overflow', 'hidden');

                // Rating
                cy.get('.rating')
                .should('have.css', 'align-items', 'center') 
                .and('have.css', 'display', 'flex')
                .within(() => {

                    // Star icon
                    cy.get('img').should('have.attr', 'src').and('include', 'star.svg')

                    // Rating
                    cy.get('.rating-value')
                    .should('have.css', 'font-size', `${Math.min(25, 3 * innerWidth)}px`)
                    .and('have.css', 'line-height', '30px')
                    .and('have.css', 'font-family', 'Arial')
                    .and('have.css', 'margin-left', '10px')
                    .and('have.css', 'height', '25px'); 
                });

                // Read more button
                cy.get('custom-button')
                .should('have.css', 'width', '260px')
                .within(() => {
                    cy.get('button')
                    .should('have.css', 'display', 'flex')
                    .and('have.css', 'align-items', 'center')
                    .and('have.css', 'justify-content', 'space-between')
                    .and('have.css', 'width', '260px')
                    .and('have.css', 'padding', '8px 16px')
                    .and('have.css', 'border', '1px solid rgb(0, 0, 0)')
                    .and('have.css', 'border-radius', '100px')
                    .and('have.css', 'cursor', 'pointer')
                    .and('have.css', 'font-size', `${Math.min(18, 1.8 * innerWidth)}px`)
                    .and('have.css', 'font-family', 'Arial')
                    .and('have.css', 'font-weight', '500')
                    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'column-gap', '20px')
                    .contains('Read more')
                })
            })
        })
    });

    it('4. Movie dialog', () => {
        cy.get('movie-info-card').first().within(() => {
            cy.get('custom-button').click();
        })

        cy.get('mat-dialog-container').should('exist')
        .within(() => {
            cy.get('.movie-full-info-container')
            .should('have.css', 'display', 'flex')
            .and('have.css', 'align-items', 'center')
            .and('have.css', 'padding-top', '20px')
            .and('have.css', 'padding-bottom', '20px')
            .and('have.css', 'padding-left', '60px')
            .and('have.css', 'padding-right', '60px')
            .and('have.css', 'font-family', 'Arial')
            .within(() => {

                // Image - left
                cy.get('.left-content .image-wrapper')
                .and('have.css', 'height', `${Math.min(500, 0.4 * innerWHeight)}px`);

                // Movie info - right
                cy.get('.movie-info')
                .should('have.css', 'display', 'flex')
                .and('have.css', 'flex-direction', 'column')
                .and('have.css', 'row-gap', '20px')
                .within(() => {

                    // Title
                    cy.get('.title')
                    .should('have.css', 'font-weight', '700')
                    .and('have.css', 'font-size', `${Math.min(45, 0.02 * innerWidth)}px`)
                    .and('have.css', 'line-height', '31px')
                    .and('have.css', 'text-transform', 'uppercase');

                    // Runtime
                    cy.get('.runtime')
                    .should('have.css', 'line-height', '31px')
                    .and('have.css', 'font-size', '25px')
                    .contains('h').contains('min');

                    // Rating

                     // Star icon
                     cy.get('img.rating-star').should('have.attr', 'src').and('include', 'star.svg')
                    // Value
                    cy.get('.rating-value')
                    .should('have.css', 'line-height', '21px')
                    .and('have.css', 'font-size', '25px')
                    .and('have.css', 'margin-left', '10px')
                    .and('have.css', 'height', '15px');

                    // Synopsis
                    cy.get('.synopsis')
                    .should('have.css', 'font-size', `${Math.min(30, 0.015 * innerWidth).toFixed(1)}px`)
                    .and('have.css', 'line-height', '31px')
                    .and('have.css', 'font-family', 'Georgia');

                    
                })

                // Button
                cy.get('custom-button button')
                .should('have.css', 'flex-direction', 'row-reverse')
                .contains('Back to list').click();
            })
        });

        cy.get('mat-dialog-container').should('not.exist')
    })
});
    
