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
    // cypress/integration/textbox_spec.js

// Function to generate dynamic text value
function generateDynamicText() {
  // Implement your logic to generate dynamic text here
  // For example, you can use a timestamp or any dynamic generation logic
  return `DynamicText_${Date.now()}`;
}

describe('Textbox with Dynamic Text Value', () => {
  it('should enter a dynamic text value into the textbox', () => {
    // Visit the page with the textbox
    cy.visit('/your_page_url');

    // Assuming the textbox has an identifier like an ID or class
    const textboxSelector = 'input[type="text"]';

    // Get the textbox and clear the existing value
    cy.get(textboxSelector).clear();

    // Call the function to generate dynamic text value
    const dynamicText = generateDynamicText();

    // Enter the dynamic text value into the cleared textbox
    cy.get(textboxSelector).type(dynamicText);

    // Optionally, you can perform additional assertions or actions after entering the text
    // For example, you might want to check if the textbox has the entered value
    cy.get(textboxSelector).should('have.value', dynamicText);
  });
});

    procedurePage.procedurepopupprocedurename().type("Induction Motor _1");
  })
  Then("Click Procedure Create button.", () => {
    procedurePage.procedurepopupcreate().click();
    cy.wait(2000);
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
    
    //input[@placeholder='Procedure Name']
    cy.xpath('//table[contains(@class,"MuiTable-root MuiTable-stickyHeader")]/tbody[1]/tr[1]/td[2]/div[1]').click();
 
   })
   Then("Click edit options and rewrite the procedure name.", () => {
    cy.xpath('//button[text()="Edit"]').click();
    cy.xpath('(//label[text()="Procedure name"])[2]/following::input').clear();
    cy.wait(2000);
    cy.xpath('//input[@placeholder="Procedure Name"]').type('Induction Motor Name Edited');
    cy.wait(2000);
 
   })
   Then("Click update button and verify that the toaster message is displayed.", () => {
    
    cy.xpath('//button[text()="Update"]').click();
    cy.wait(2000);
    // cy.contains('YourText').then(($element) => {
    //   if ($element.length > 0) {
    //     // If the element exists, click it
    //     cy.contains('YourText').click();
    //   } else {
    //     // If the element does not exist, perform another action or log a message
    //     cy.log('Element with text "YourText" not found.');
    //   }
    // });
 
   })

   Then("Verify that the user able to edit the created procedure details.", () => {

    cy.wait(2000);
   // cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
    
    cy.xpath('//button[text()="Edit"]').click();
    cy.xpath('(//label[text()="Procedure name"])[2]/following::input').clear();
    cy.wait(2000);
    cy.xpath('//input[@placeholder="Procedure Name"]').type('Induction Motor Name Edited');
    cy.wait(2000);
 
    cy.xpath('//button[text()="Update"]').click();
    cy.wait(2000);
 
   })


   

