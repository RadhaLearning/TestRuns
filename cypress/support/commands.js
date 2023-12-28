// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 //Cypress.Commands.add('login', (email, password) => { })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('Uncaught exception:', err);
    return false;
  });

  // cypress/support/commands.js
import 'cypress-file-upload';

// cypress/support/commands.js
Cypress.Commands.add('uploadFileFromFixture', (fileName, selector) => {
  cy.fixture(fileName, 'base64').then(fileContent => {
    cy.get(selector).attachFile({
      fileContent,
      fileName: fileName,
      mimeType: 'application/octet-stream', // Adjust the mimeType if needed
    });
  });
});

  
