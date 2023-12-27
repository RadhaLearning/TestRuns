import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { assetsPage } from '@pages/AssetsPage';
  
  
  Then("Click anywhere on the particular Asset records in Asset page.", () => {
    assetsPage.thermometer().click();
   
  })
  
  // Then("Verify that the user able to visit Asset Edit details in Assert details page.", () => {
   
   
  // })
  
  // Then(" Enter Asset name in edit asset details page.", () => {
   
  // })
  
  // Then(" Verify that the system enforces the maximum length for the first name and last name fields.", () => {
   
  // })
  
  // Then("Verify that the field is displayed with a predefined default value and un-editable.", () => {
   
  // })
  
  // Then(" Click calender and choose date wisely.", () => {
    
  // })
  // Then(" Verify that the User able to choose Date from calender.", () => {
    
  // })
  // Then(" User cannot see or click the future date field.", () => {
    
  // })
  // Then(" The user leaves the field empty.", () => {
    
  // })
  // Then(" The input is invalid because it's an empty field. The system should reject it and provide an error message.", () => {
    
  // })
  // Then("Verify that the User able to choose Date from calender.", () => {
    
  // })
  // Then("User cannot see or click the past date field.", () => {
    
  // })
  // Then("The input is invalid because it's a future date. The system should reject it and provide an error message.", () => {
    
  // })
  // Then(" Select the required value and it is displayed in that field.", () => {
    
  // })
  // Then(" Verify that the selected option is displayed and the dropdown behaves responsively.", () => {
    
  // })
  // Then(" Click the Save button.", () => {
    
  // })
  // Then(" Asset details will be succesfully saved and a pop-up will be displayed.", () => {
    
  // })
  // Then("Click the Back button.", () => {
    
  // })
  // Then("Verify that the changes made is not saved and goes back to previous page.", () => {
    
  // })
  // Then("Select multiple photos from the file system and click upload. ", () => {
    
  // })
  // Then(" Verify that users can successfully upload a photo.", () => {
    
  // })
  // Then("Verify that all selected photos are shouldn't be displayed or previewed on the page and throws validation.", () => {
    
  // })
  // Then("Attempt to upload a photo with an invalid file format.", () => {
    
  // })
  // Then("Verify that the system provides an error message indicating the invalid file format.", () => {
    
  // })
  // Then(" Attempt to upload a photo that exceeds the maximum allowed file size.", () => {
    
  // })
  // Then(" Verify that the system provides an error message indicating the file size exceeds the limit.", () => {
    
  // })
  // Then("Click on the Upload Photo button.", () => {
    
  // })
  // Then("Select a photo from the file system.", () => {
    
  // })
  // Then("Click on the Cancel or Close button before completing the upload.", () => {
    
  // })
  // Then("Verify that the upload process is canceled, and the selected photo is not uploaded.", () => {
    
  // })
  // Then(" Upload a photo from different devices and browsers.", () => {
    
  // })
  // Then("Verify that the preview of the uploaded photo is consistent and displays properly across all tested devices and browsers.", () => {
    
  // }) 
  //  Then("Click History tab in Asset details.", () => {
    
  // })
  // Then(" Verify that the user able to visit History in Assert details page.", () => {
    
  // })
  // Then(" View the History of the particular  Asset.", () => {
    
  // })
  // Then(" Verify that the user able to see the history of the particular Asset.", () => {
    
  // })

   Then("Enter Asset name in edit asset details page.", () => {
    assetsPage.assetsdetailsname().clear();
    assetsPage.assetsdetailsname().type('Thermometer2');
  })

  Then("Click Purchase calender and choose date wisely.", () => {
    const currentDate = new Date();

    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 7);

    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 7);

    const currentDateString = currentDate.toISOString().split('T')[0];
    const pastDateString = pastDate.toISOString().split('T')[0];
    const futureDateString = futureDate.toISOString().split('T')[0];

    cy.log(`Current Date: ${currentDateString}`);
    cy.log(`Past Date: ${pastDateString}`);
    cy.log(`Future Date: ${futureDateString}`);

    assetsPage.pdate().type(currentDateString);

    // cy.wait(1000);
    // assetsPage.assetsdetailspurchasedate().click();
    // cy.wait(1000);
    // assetsPage.assetsdetailschoosedate().click();
  })

  Then("Verify that the User able to choose guarantee Date from calender.", () => {
    const currentDate = new Date();

    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 10);

    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 10);

    const currentDateString = currentDate.toISOString().split('T')[0];
    const pastDateString = pastDate.toISOString().split('T')[0];
    const futureDateString = futureDate.toISOString().split('T')[0];

    cy.log(`Current Date: ${currentDateString}`);
    cy.log(`Past Date: ${pastDateString}`);
    cy.log(`Future Date: ${futureDateString}`);

    assetsPage.gdate().type(currentDateString);
    // cy.wait(1000);
    // assetsPage.assetsdetailsguarantydate().click();
    // cy.wait(1000);
    // assetsPage.assetsdetailschoosedate().click();
  })

  Then("Verify that user able to select organisation from dropdown.", () => {
    assetsPage.assetsdetailsorganisation().click();
    cy.wait(1000);
    assetsPage.assetsdetailsorganisationdropdown().click();
  })

  Then("verify that user able to select department from dropdown.", () => {
    assetsPage.assetsdetailsdepartment().click().type('{enter}');
    cy.wait(1000);
    assetsPage.assetsdetailsdepartment().type('{enter}');
    
  })
  Then("verify that user able to select laboratory from dropdown.", () => {
    assetsPage.assetsdetailslaboratory().click().type('{enter}');
    cy.wait(1000);
    assetsPage.assetsdetailslaboratorydropdown().click();
    
  })

  Then("verify that user able to select status from dropdown.", () => {
    assetsPage.assetsdetailsstatus().click();
    cy.wait(1000);
    assetsPage.assetsdetailsstatusdropdown().click();
  })
  Then("verify that user able to select availability from dropdown.", () => {
    assetsPage.assetsdetailsstatus().click();
    wait(1000);
    assetsPage.assetsdetailsstatusdropdown().click();
  })
  Then("Click Save button.", () => {
    assetsPage.assetsdetailssave().click();
  })


 
