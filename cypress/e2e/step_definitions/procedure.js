import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { procedurePage } from '@pages/ProcedurePage';
  
  
  Then("Click procedure in side menu.", () => {
    cy.wait(1000);
    procedurePage.proceduresidemenu().click();
  })
  
  
  Then("Click Create Procedure button.", () => {
    procedurePage.createprocedura().click();
  })
  Then("Click Department dropdown.", () => {
    procedurePage.procedurepopupdepartdropdown().click();
    cy.wait(2000);
    procedurePage.proceduredepartvalue().click();
    cy.wait(2000);
  })
  Then("Click Laboratory dropdown.", () => {
    procedurePage.procedurepopuplabdropdown().click();
    cy.wait(2000);
    procedurePage.procedurelabvalue().click();
  })
  Then("Enter Procedure Name.", () => {
    procedurePage.procedurepopupprocedurename().type("Procedure 12");
  })
  Then("Click Procedure Create button.", () => {
    procedurePage.procedurepopupcreate().click();
  })
  Then("Click Cancel button.", () => {
    procedurePage.procedurecancel().click();
 
   })

  Then("Click Yes from confirmation.", () => {
   procedurePage.procedurecancelyes().click();

  })
  Then("Check Mandatory error message are displayed.", () => {
   procedurePage.departmenterror().should('be.visible');
   procedurePage.laboratoryerror().should('be.visible');
   procedurePage.procedurenameerror().should('be.visible');
    
  })
  Then("Click created procedure if its exist in table.", () => {
    
 
   })
   Then("Click edit options and rewrite the procedure name.", () => {
    
 
   })
   Then("Click update button and verify that the toaster message is displayed.", () => {
    
    cy.contains('YourText').then(($element) => {
      if ($element.length > 0) {
        // If the element exists, click it
        cy.contains('YourText').click();
      } else {
        // If the element does not exist, perform another action or log a message
        cy.log('Element with text "YourText" not found.');
      }
    });
 
   })



