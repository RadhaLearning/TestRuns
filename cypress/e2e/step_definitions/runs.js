import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { runsPage } from '@pages/RunsPage';
  import { assetsPage } from '@pages/AssetsPage';
  
  
  Then("Click Runs in side menu.", () => {
    cy.wait(5000);
    cy.xpath('(//div[@class="MuiListItemIcon-root css-1f8bwsm"])[2]').click();

  })
  
  Then("Create an New Runs.", () => {
    cy.wait(2000);
    cy.xpath('//button[text()="Create Run"]').click();
    cy.wait(2000);
    cy.xpath('//div[text()="Select Procedure"]').click();
    cy.wait(2000);
    cy.xpath('(//li[@role="option"])[1]').click();
    cy.wait(2000);
    cy.xpath('//input[@placeholder="Test objective"]').type('Objective1');
    cy.wait(2000);
    cy.xpath('//button[@aria-label="Choose date"]').click();
    cy.wait(2000);
  //   const today = new Date();
  // const dynamicDate = new Date(15, today.getMonth(), today.getFullYear());

  // // Format the dynamic date as 'DD-MM-YYYY'
  // const day = dynamicDate.getDate().toString().padStart(2, '0');
  // //  const month = (dynamicDate.getMonth() + 1).toString().padStart(2, '0');
  // // const year = dynamicDate.getFullYear();
  // // const formattedDate = `${day}-${month}-${year}`;

  // // Visit your webpage
  // //cy.visit('your_website_url');

  // // Click on the button to open the calendar
  // cy.xpath(`//button[text()='${day}']`).click();
  cy.get('.MuiPickersDay-today').click();
  cy.wait(1000);
  cy.xpath('//button[text()="Create"]').click();
  })


  Then("Edit created Runs details.", () => {
    cy.wait(3000);
    cy.xpath('//div[@class="MuiBox-root css-79elbk"]//button[1]').click();
    cy.wait(2000);
    // cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
    cy.xpath('//div[text()="Search by"]').click();
    cy.wait(2000);
  
    cy.wait(1000);
    cy.xpath('(//li[@role="option"])[1]').click();
    cy.wait(1000);
    assetsPage.select().click();
    cy.wait(1000);
    cy.xpath('(//li[@role="option"])[1]').click();
  
    cy.wait(1000);
    assetsPage.showresults().click();
    cy.wait(1000);
    cy.xpath('//div[@class="MuiBox-root css-1isemmb"]//div[1]').click();
    cy.wait(1000);
    cy.xpath('//button[text()="Edit"]').click();
    cy.wait(1000);
    cy.xpath('(//label[text()="Test objective"]/following::input)[1]').clear();
    cy.wait(1000);
    cy.xpath('(//label[text()="Test objective"]/following::input)[1]').type('Objective Edited');
    cy.wait(2000);
    cy.xpath('(//div[contains(@class,"MuiInputAdornment-root MuiInputAdornment-positionEnd")]//button)[2]').click();
    cy.wait(2000);
    const today = new Date();
  const dynamicDate = new Date(15, today.getMonth(), today.getFullYear());

  // Format the dynamic date as 'DD-MM-YYYY'
  const day = dynamicDate.getDate().toString().padStart(2, '0');
  //  const month = (dynamicDate.getMonth() + 1).toString().padStart(2, '0');
  // const year = dynamicDate.getFullYear();
  // const formattedDate = `${day}-${month}-${year}`;

  // Visit your webpage
  //cy.visit('your_website_url');

  // Click on the button to open the calendar
  cy.xpath(`//button[text()='${day}']`).click();
  cy.get('.MuiPickersDay-today').click();
  cy.wait(1000);
  cy.xpath('//button[text()="Add"]').click();
  cy.wait(1000);
  cy.xpath('(//input[@placeholder="Assignee"])[1]').click().type('choice@yopmail.com').type('{downarrow}').type('{enter}');
  cy.wait(1000);
  cy.xpath('(//button[text()="Save"])[2]').click();
  cy.wait(1000);
  cy.xpath('//button[text()="Update"]').click();
  cy.wait(1000);
  })
  Then("Assigning the Runs.", () => {
    
    cy.xpath('//button[text()="Assign"]').click();
    cy.wait(1000);
    cy.xpath('(//input[@placeholder="Assignee"])[2]').click().type('choice@yopmail.com').type('{downarrow}').type('{enter}');
    cy.wait(1000);
    cy.xpath('(//button[text()="Save"])[3]').click();
    cy.wait(5000);

  })
  Then("Sharing the Runs.", () => {
    cy.wait(1000);
    cy.xpath('//button[text()="Share"]').click();
    cy.wait(2000);
    cy.xpath('(//input[@placeholder="Assignee"])[2]').click().type('choice@yopmail.com').type('{downarrow}').type('{enter}');
    cy.wait(2000);
    cy.xpath('(//button[text()="Save"])[3]').click();
    cy.wait(2000);
    
  })
  Then("Change the Runs status.", () => {
    cy.wait(2000);
    cy.get('.MuiButton-text').click();
    cy.wait(1000);
   
    cy.xpath('//div[text()="Created"]').click();
    cy.wait(2000);
    cy.xpath('//li[@data-value="Started"]').click();

    // cy.xpath('//div[text()="Created"]').contains('Created').then(($option) => {
    //   if ($option.is(':visible')) {
    //     cy.wrap($option).click();
    //   }
    // });
    // // Check if "Started" is displayed, then click it
    // cy.xpath('//div[text()="Created"]').contains('Started').then(($option) => {
    //   if ($option.is(':visible')) {
    //     cy.wrap($option).click();
    //   }
    // });

    // // Check if "Stopped" is displayed, then click it
    // cy.xpath('//div[text()="Created"]').contains('Stopped').then(($option) => {
    //   if ($option.is(':visible')) {
    //     cy.wrap($option).click();
    //   }
    // });

    // // Check if "Submitted" is displayed, then click it
    // cy.xpath('//div[text()="Created"]').contains('Submitted').then(($option) => {
    //   if ($option.is(':visible')) {
    //     cy.wrap($option).click();
    //   }
    // });

    // // Check if "Completed" is displayed, then click it
    // cy.xpath('//div[text()="Created"]').contains('Completed').then(($option) => {
    //   if ($option.is(':visible')) {
    //     cy.wrap($option).click();
    //   }
    // });
    cy.wait(1000);
    cy.xpath('(//button[text()="Save"])[1]');
    
  })
  Then("", () => {
    
  })
  Then("", () => {
    
  })
  Then("", () => {
    
  })
  Then("", () => {
    
  })
  Then("", () => {
    
  })
  Then("", () => {
    
  })
  Then("", () => {
    
  })
  Then("", () => {
    
  })
  Then("", () => {
    
  })