import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { assetsPage } from '@pages/AssetsPage';
  
  
  Then("Click create assets button.", () => {
    cy.wait(1000);
    assetsPage.createassets().click();
   
  })
  
 
  Then("Verify the User see list of fields in Add new asset Pop-Up screen.", () => {
    cy.wait(3000);
    assetsPage.popupassetnametitle().should('be.visible');
    assetsPage.popuppurchasetitle().should('be.visible');
    assetsPage.popupguarentytitle().should('be.visible');
    assetsPage.popuporganisationtitle().should('be.visible');
    assetsPage.popupdepartmenttitle().should('be.visible');
    assetsPage.popuplaboratorytitle().should('be.visible');
    assetsPage.popupstatustitle().should('be.visible');
    assetsPage.popupavailabilitytitle().should('be.visible');
  })
  Then("Click Cancel From Add new Asset Pop-Up screen.", () => {
    assetsPage.popupcancel().click();
    cy.wait(2000);
  })
  Then("Click Yes from Confirmation screen.", () => {
   
    assetsPage.confirmyes().click();
  })
  Then("Ensure it Redirect to Asset Page after click Yes.", () => {
    console.log('The Page redirects to assets page after clicked yes');
  })
  Then("Click No from Confirmation screen.", () => {
    assetsPage.confirmno().click();
  })
  Then("Ensure it Redirect to Asset Page after click No.", () => {
    console.log('The Page redirects to assets page after clicked No');
  })
  Then("Click and upload Assets image.", () => {
    const filepath = 'C:\Users\TLSPC-091\Pictures\Screenshots\voltmeter.jpg'
        assetsPage.popimageupload().click().attachFile(filepath);
        cy.wait(2000);
  })
  Then("Click Enter Asset Name Textbox and  enter name with allowed character 8-16 without Numeric.", () => {
    assetsPage.popupassetsname().type('ASS17');
  })
  Then("Click Calender icon in Purchase date field and choose date wisely.", () => {
    cy.wait(1000);
    assetsPage.popuppurchasedate().click();
    cy.wait(1000);

    const today = new Date();
    const dynamicDate = new Date(today.getDate() + 7, today.getMonth(),today.getFullYear());
    
    // Format the dynamic date as 'DD-MM-YYYY'
    const day = dynamicDate.getDate().toString().padStart(2, '0');
  //  const month = (dynamicDate.getMonth() + 1).toString().padStart(2, '0');
   // const year = dynamicDate.getFullYear();
   // const formattedDate = `${day}-${month}-${year}`;
    
    // Visit your webpage
    //cy.visit('your_website_url');
    
    // Click on the button to open the calendar
    cy.xpath(`//button[text()='${day}']`).click();

     //assetsPage.purchasedatechoose().click();

  })
  Then("Verify that the User able to choose the Purchased Date based on Asset.", () => {
    console.log('Able to choose purchase date on assets');
  })
  Then("Click Calender icon in Guaranty Warranty Expiry date field and choose date wisely.", () => {
  


    assetsPage.popupguarantydate().click();
    cy.wait(1000);

    cy.get('[aria-rowindex="6"] > .MuiButtonBase-root').click();

    // const today = new Date();
    // const dynamicDate = new Date(today.getDate() + 7, today.getMonth(),today.getFullYear());
    
  //   // Format the dynamic date as 'DD-MM-YYYY'
  //   const day = dynamicDate.getDate().toString().padStart(2, '0');
  // //  const month = (dynamicDate.getMonth() + 1).toString().padStart(2, '0');
  //  // const year = dynamicDate.getFullYear();
  //  // const formattedDate = `${day}-${month}-${year}`;
    
  //   // Visit your webpage
  //   //cy.visit('your_website_url');
    
  //   // Click on the button to open the calendar
  //   cy.xpath(`//button[text()='${day}']`).click();

  //    //assetsPage.purchasedatechoose().click();
  })
  Then("Verify that the User able to choose the Guaranty Warranty Expiry Date based on Asset.", () => {
    console.log('Able to choose Guaranty date on assets');
  })
  Then("Click Organisation Dropdown and Select wisely.", () => {
    assetsPage.popuporganisation().click();
    cy.wait(1000);
    assetsPage.popuporganisationoptions().click();

  })
  Then("Click Department Dropdown and Select wisely.", () => {
    assetsPage.popupdepartment().click();
    cy.wait(1000);
    assetsPage.popupdepartmentoptions().click();
    cy.wait(1000);
  })
  Then("Click Labaratory Dropdown and Select wisely.", () => {
    assetsPage.popuplaboratory().click();
    cy.wait(1000);
    assetsPage.popuplaboratoryoptions().click();
    cy.wait(1000);
  })
  Then("Click Status Dropdown and Select wisely.", () => {
    assetsPage.popupstatus().click();
    cy.wait(1000);
    assetsPage.statusinactive().click();
    cy.wait(1000);
  })
  Then("Click Availability Dropdown and Select wisely.", () => {
    assetsPage.popupavailability().click();
    cy.wait(1000);
    assetsPage.popupavailablestatus().click();
  })
  Then("Click Create button.", () => {
   assetsPage.popupcreate().click();
  })

  Then("Click Assets Name checkbox.", () => {
    cy.wait(3000);
    assetsPage.tablecheckbox().click();
  })
  Then("Click Select All checkbox.", () => {
   
    assetsPage.selectallcheckbox().click();
  })
  Then("Click Deselect All checkbox.", () => {
   
    assetsPage.deleteallcheckbox().click();
  })
  Then("Click share button.", () => {
   
    assetsPage.share().click();
  })
  Then("Select people and Click save button.", () => {
   
    assetsPage.sharesave().click();
  })
  Then("Click Delete button.", () => {
   
    assetsPage.delete().click();
  })
  Then("Click Delete Yes button.", () => {
   
    assetsPage.deleteyes().click();
  })

  Then("Verify that the Assets are deleted successfully.", () => {
   
    console.log("Assets deleted successfully");
  })

  Then("Click Status dropdown and change values accordinly.", () => {
    cy.wait(1000);

    if (cy.xpath('(//div[text()="Active"])[1]').should('be.visible')) {
      cy.xpath('(//div[text()="Active"])[1]').click();

  cy.xpath('//li[text()="In Active"]').click();
} else if (cy.xpath('(//div[text()="In Active"])[2]').should('be.visible')) {
  
  cy.xpath('(//div[text()="In Active"])[2]').click();
  cy.xpath('//li[text()="Active"]').click();
}

  })

  Then("Click Availability dropdown and change values accordinly.", () => {
    cy.wait(3000);
    cy.xpath('(//div[text()="Available"])[1]').then(($element) => {
      if ($element.is(':visible')) {
        cy.xpath('(//div[text()="Available"])[1]').click();
        //assetsPage.availablestatus().click();
        cy.xpath('(//li[@role="option"])[3]').click();
      } else {
        // Check for the next condition
        cy.xpath('(//div[text()="In Use"])[3]').then(($inUseElement) => {
          if ($inUseElement.is(':visible')) {
            cy.xpath('(//div[text()="In Use"])[3]').click();
           // assetsPage.availablestatus().click();
            cy.xpath('(//li[@role="option"])[1]').click();
          } else {
            // Check for the final condition
            cy.xpath('(//div[text()="Not Available"])[1]').then(($notAvailableElement) => {
              if ($notAvailableElement.is(':visible')) {
                cy.xpath('(//div[text()="Not Available"])[1]').click();
                //assetsPage.availablestatus().click();
                cy.xpath('(//li[@role="option"])[1]').click();
              } else {
                // Handle other cases if needed
                cy.log('Status not recognized');
              }
            });
          }
        });
      }
    });
    // assetsPage.availablestatus().click();
    // cy.wait(1000);
    // assetsPage.inuse().click();
  
  })

  Then("Click filter options.", () => {
   
    assetsPage.filter().click();
    cy.wait(1000);
  })

  Then("Click search by option and choose Assets ID.", () => {
   assetsPage.searchby().click();
   cy.wait(1000);
   assetsPage.assetsid().click();
   cy.wait(1000);

  })

  Then("Select required Asset ID in dropdown.", () => {
    assetsPage.select().click();
    cy.wait(1000);
    assetsPage.selectoptions().click();
    cy.wait(3000);
  })

  Then("Click search by option and choose Assets Name.", () => {
    assetsPage.searchby().click();
   cy.wait(1000);
   assetsPage.assetsname().click();
   cy.wait(1000);

  })
  Then("Enter the Assets name in checkbox.", () => {
   assetsPage.filtersearchtextbox().type('ASS12');
   cy.wait(1000);

  })

   Then("Click search by option and Department.", () => {
    assetsPage.searchby().click();
   cy.wait(1000);
   assetsPage.assetsdepartment().click();
   cy.wait(1000);

  })
  Then("Select required Department in dropdown.", () => {
    assetsPage.select().click();
    cy.wait(1000);
    assetsPage.selectoptions().click();
    cy.wait(3000);

  })

  Then("Click search by option and choose Lab.", () => {
    assetsPage.searchby().click();
   cy.wait(1000);
   assetsPage.assetslab().click();
   cy.wait(1000);

  })
  Then("Select required Lab in dropdown.", () => {
    assetsPage.select().click();
    cy.wait(1000);
    assetsPage.selectoptions().click();
    cy.wait(3000);

  })

  Then("Click search by option and choose Purchased on.", () => {
    assetsPage.searchby().click();
   cy.wait(1000);
   assetsPage.assetspurchasedon().click();
   cy.wait(1000);

  })
  Then("Select required date choose wisely.", () => {
    assetsPage.datepurchaseon().click();
    cy.wait(1000);
    
    const today = new Date();
    const dynamicDate = new Date(15, today.getMonth(),today.getFullYear());
    
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

  })
  Then("Click search by option and choose last used date.", () => {
    assetsPage.searchby().click();
   cy.wait(1000);
   assetsPage.assetslastused().click();
   cy.wait(1000);

  })
  Then("Select required last used date choose wisely.", () => {
    assetsPage.datepurchaseon().click();
    cy.wait(1000);
    
    const today = new Date();
    const dynamicDate = new Date(15, today.getMonth(),today.getFullYear());
    
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

  })
  Then("Click search by option and choose Status.", () => {
    assetsPage.searchby().click();
   cy.wait(1000);
   assetsPage.assetsfilterstatus().click();
   cy.wait(1000);

  })
  Then("Select required status in dropdown.", () => {
    assetsPage.select().click();
    cy.wait(1000);
    assetsPage.selectoptions().click();
    cy.wait(3000);

  })

  Then("Click search by option and choose Avaiability.", () => {
    assetsPage.searchby().click();
   cy.wait(1000);
   assetsPage.assetsfilteravailability().click();
   cy.wait(1000);

  })
  Then("Select required Availability in dropdown.", () => {
    assetsPage.select().click();
    cy.wait(1000);
    assetsPage.selectoptions().click();
    cy.wait(3000);

  })

  Then("Click show results button.", () => {
    assetsPage.showresults().click();
    cy.wait(1000);

  })

  Then("Observe the Filtered assets are shown in table.", () => {
    console.log('Assets are filtered successfully and displayed the assets details in table')

  })

  Then("Verify that the mandatory error message are displayed.", () => {
    assetsPage.assetserrormessage().should('be.visible');
    assetsPage.purchasedateerrormessage().should('be.visible');
    assetsPage.organisationerrormessage().should('be.visible');
    assetsPage.departmenterrormessage().should('be.visible');
    assetsPage.laboratoryerrormessage().should('be.visible');
    assetsPage.statuserrormessage().should('be.visible');
    assetsPage.availabilityerrormessage().should('be.visible');

   })

   Then("Click the assets that needs to be edited.", () => {
   assetsPage.displayedassets();
   cy.wait(1000);
  })

  Then("Click save button.", () => {
    cy.wait(1000);
   assetsPage.assetseditsave().click();
  })
  





  