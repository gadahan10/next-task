/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(): Chainable<Subject>;
    }
  }
Cypress.Commands.add('login', () => {
    cy.visit('http://localhost:4200');
  });