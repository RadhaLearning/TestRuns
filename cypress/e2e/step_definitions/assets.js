import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { assetsPage } from '@pages/AssetsPage';
  
  
  Then("Click the Asset module which is located in the sidebar.", () => {
    
    assetsPage.assetssidemenu().click();
  })
  Then("Verify whether the asset page is as per The Figma UI.", () => {
    

  })
  
  Then("Click the Add button and a pop-up displays.", () => {
   
    assetsPage.createassets().click();
  })
  
  Then("Enter Asset Name and click Search.", () => {
    assetsPage.searchassets().type('voltmeter,Cypress{enter}');
  })
  
  Then(" Search for assets using any name.", () => {
   
  })
  
  Then("Directly click the search button by leaving the fields empty.", () => {
    assetsPage.searchassets().click();
  })
  
  Then("Search with non existing assets.", () => {
    
  })
  Then(" Click the Asset Id filter and select the required asset id.", () => {
    
  })
  Then("Verify that the filtered asset is displayed properly based on the asset id.", () => {
    
  })
  Then("Click the Department filter and select the required  department.", () => {
    
  })
  Then("Verify that the filtered asset is displayed properly based on the department.", () => {
    
  })
  Then("Click the Lab filter and select the required Lab.", () => {
    
  })
  Then("Verify that the filtered asset is displayed properly based on the Lab.", () => {
    
  })
  Then("Click the Search filter and select the requied asset for search.", () => {
    
  })
  Then("Verify that the filtered asset is displayed properly based on the Search.", () => {
    
  })
  Then("Click the Purchased On filter and select the required date.", () => {
    
  })
  Then("Verify that the filtered asset is displayed properly based on the Purchased On date.", () => {
    
  })
  Then("Click the Last Used filter and select the required date.", () => {
    
  })
  Then("Verify that the filtered asset is displayed properly based on the Last Used date.", () => {
    
  })
  Then("Click the Status filter and select the asset based on the status.", () => {
    
  })
  Then("Verify that the filtered asset is displayed properly based on the Status of the asset condition.", () => {
    
  })
  Then("Click the Availability filter and select the asset based on the availability.", () => {
    
  })
  Then("Verify that the filtered asset is displayed properly based on the availability of asset.", () => {
    
  })
  Then("Click the required asset which is present in the table.", () => {
    
  })
  Then("Ensure that the asset details page is opening when the user clicks the specific asset in the table.", () => {
    
  })
  Then(" Click the pagination dropdown and view the next page.", () => {
    
  })
  Then("Click the previous link in the pagination.", () => {
    
  })
  Then("Click the Next link in the pagination.", () => {
    
  })
  Then("Ensure that the previous button is disabled.", () => {
    
  })
  Then(" Click the last link in the pagination.", () => {
    
  })
  Then(" Ensure that the last button is disabled.", () => {
    
  })

 