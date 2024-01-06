import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { procedurePage } from '@pages/ProcedurePage';
import { assetsPage } from '@pages/AssetsPage';


Then("Click procedure in side menu.", () => {
  cy.wait(1000);
  procedurePage.proceduresidemenu().click();
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

Then("Click Cancel button.", () => {
  procedurePage.procedurecancel().click();

})

Then("Click Yes from confirmation.", () => {
  procedurePage.procedurecancelyes().click();

})
Then("Check Mandatory error message are displayed.", () => {
  cy.xpath('//button[text()="Create"]').click();
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

  cy.xpath('//button[text()="Edit"]').click();
  cy.xpath('(//label[text()="Procedure name"])[2]/following::input').clear();
  cy.wait(2000);
  cy.xpath('//input[@placeholder="Procedure Name"]').type('Induction Motor Name Edited');
  cy.wait(2000);

  cy.xpath('//button[text()="Update"]').click();
  cy.wait(5000);

})



Then("Create an New Procedure.", () => {

  procedurePage.createprocedura().click();
  cy.wait(2000);
  procedurePage.procedurepopupdepartdropdown().click();
  cy.wait(2000);
  procedurePage.proceduredepartvalue().click();
  cy.wait(2000);
  procedurePage.procedurepopuplabdropdown().click();
  cy.wait(2000);
  procedurePage.procedurelabvalue().click();
  procedurePage.procedurepopupprocedurename().type("Induction Motor _1");
  procedurePage.procedurepopupcreate().click();
  cy.wait(2000);

})

Then("Edit Procedure details.", () => {
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
  cy.xpath('//div[text()="Induction Motor _1"]').click();

  cy.xpath('//button[text()="Edit"]').click();
  cy.xpath('(//label[text()="Procedure name"])[2]/following::input').clear();
  cy.wait(2000);
  cy.xpath('//input[@placeholder="Procedure Name"]').type('Induction Motor Name Edited');
  cy.wait(2000);

  cy.xpath('//button[text()="Update"]').click();
  cy.wait(2000);
  //cy.get('#asset_Name').click();
  cy.wait(1000);


  // cy.xpath('//span[text()="Insert"]').click();
  // cy.wait(1000);
  // cy.xpath('//div[text()="Image..."]').click();
  // cy.wait(1000);
  // cy.xpath('(//button[contains(@class,"tox-button tox-button--icon")]//span)[2]').click();
  // cy.wait(1000);

  // cy.get('.tox-form__controls-h-stack > .tox-button').click();
  // cy.wait(1000);
  // cy.fixture('voltmeter.jpg').then(fileContent => {
  //   // Get the file input element and attach the file
  //   cy.get('input[type="file"]').attachFile({
  //     fileContent,
  //     fileName: 'voltmeter.jpg',
  //     mimeType: 'image/jpeg'
  //   });
  // });
  // cy.log('File uploaded. Checking visibility of the image.');


  //   cy.get('#tiny-react_91501891911703836298741_ifr').click();
  //       cy.wait(2000);

  //       const filePath = 'cypress/fixtures/DC Series Motor_acet.pdf';

  // // Attach the file to the file input element
  //       cy.get('#fileInput').attachFile(filePath);

  //       cy.xpath('//button[@title="Save"]').click();
  //       cy.wait(2000);

  //       cy.xpath('//button[text()="Save"]').click();

  cy.xpath('//button[text()="Save"]').click();

})

Then("Deleting the created procedure.", () => {

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
  cy.xpath('//input[@type="checkbox"]').click();
  cy.wait(1000);
  cy.xpath('//button[text()="Delete"]').click();
  cy.wait(1000);
  cy.xpath('(//button[text()="Yes"])[2]');
  cy.wait(2000);

})


Then("Click create procedure button.", () => {
  cy.wait(1000);
  cy.xpath('//button[text()="Create Procedure"]').click();
  cy.wait(2000);
})

Then("Cancel the create procedure screen.", () => {
  cy.wait(1000);
  cy.xpath('(//button[text()="Cancel"])[3]').click();
  cy.wait(2000);
})

Then("Filter the Procedure details based on Procedure Name.", () => {
  cy.wait(3000);
  cy.xpath('//div[@class="MuiBox-root css-79elbk"]//button[1]').click();
  cy.wait(2000);
  // cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
  cy.xpath('//div[text()="Search by"]').click();
  cy.wait(2000);

  cy.wait(1000);
  cy.xpath('(//li[@role="option"])[2]').click();
  cy.wait(1000);
  cy.xpath('//input[@placeholder="Search"]').type('Induction Motor Name Edited');
  cy.wait(1000);
  assetsPage.showresults().click();
  cy.wait(2000);
})

Then("Filter the Procedure details based on Department.", () => {
  cy.wait(3000);
  cy.xpath('//div[@class="MuiBox-root css-79elbk"]//button[1]').click();
  cy.wait(2000);
  // cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
  cy.xpath('//div[text()="Search by"]').click();
  cy.wait(2000);

  cy.wait(1000);
  cy.xpath('(//li[@role="option"])[3]').click();
  cy.wait(1000);
  assetsPage.select().click();
  cy.wait(1000);
  cy.xpath('(//li[@role="option"])[1]').click();
  assetsPage.showresults().click();
  cy.wait(2000);
})

Then("Filter the Procedure details based on Lab.", () => {
  cy.wait(3000);
  cy.xpath('//div[@class="MuiBox-root css-79elbk"]//button[1]').click();
  cy.wait(2000);
  // cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
  cy.xpath('//div[text()="Search by"]').click();
  cy.wait(2000);

  cy.wait(1000);
  cy.xpath('//li[text()="Lab"]').click();
  cy.wait(1000);
  assetsPage.select().click();
  cy.wait(1000);
  cy.xpath('//li[@role="option"]').click();
  assetsPage.showresults().click();
  cy.wait(2000);
})

Then("Filter the Procedure details based on created on.", () => {
  cy.wait(3000);
  cy.xpath('//div[@class="MuiBox-root css-79elbk"]//button[1]').click();
  cy.wait(2000);
  // cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
  cy.xpath('//div[text()="Search by"]').click();

  cy.wait(1000);
  cy.xpath('//li[text()="Created on"]').click();
  cy.wait(1000);
  cy.xpath('//button[@aria-label="Choose date"]').click();
  cy.wait(1000);
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
  cy.wait(1000);

  assetsPage.showresults().click();
  cy.wait(2000);
})

Then("Filter the Procedure details based on created by.", () => {
  cy.wait(3000);
  cy.xpath('//div[@class="MuiBox-root css-79elbk"]//button[1]').click();
  cy.wait(2000);
  // cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
  cy.xpath('//div[text()="Search by"]').click();

  cy.wait(1000);
  cy.xpath('//li[text()="Created by"]').click();
  cy.wait(1000);
  cy.xpath('//input[@placeholder="Search"]').type('admin');
  cy.wait(1000);
  assetsPage.showresults().click();
  cy.wait(2000);

})






