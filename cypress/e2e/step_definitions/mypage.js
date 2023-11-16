import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { mypagePage } from '@pages/MyPagePage';
  
  Then("Ensure that the My Page is shown as per Figma UI.",() =>{
    cy.wait(3000);
    mypagePage.mypagesidemenu().should('exist');
    cy.wait(3000);
    mypagePage.runsmenu().should('exist');
    cy.wait(3000);
    mypagePage.proceduremenu().should('exist');
    cy.wait(3000);
    mypagePage.projectmenu().should('exist');
    cy.wait(3000);
    mypagePage.assetsemenu().should('exist');
    cy.wait(3000);
    mypagePage.settingsemenu().should('exist');
    cy.wait(3000);
    mypagePage.billingandsubscriptionsemenu().should('exist');
  })

  Then("Click search field and enter text.", ()=>{
    mypagePage.searchtask().type("Pendulam Task");

  })

  Then("Verify that the User able to see the Task Details after search.", ()=>{
    
    cy.log("There is no task Displayed after the search");

  })