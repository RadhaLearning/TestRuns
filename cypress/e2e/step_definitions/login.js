import {
  Given,
//  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage';


Given("A web browser is at the Testrunz login page", () => {
  cy.viewport(1920, 1080)
  cy.visit("/");
  cy.wait(1000);
});

Then("A Testrunz application contains following elements", () => {

  loginPage.email().should('exist');
  loginPage.password().should('exist');
  loginPage.remembermecheckbox().should('exist');
  loginPage.forgotpasswordlinktext().should('exist');
  loginPage.loginbtn().should('exist');
  loginPage.helplinktext().should('exist');
  loginPage.termslinktext().should('exist');
  loginPage.loginpagetitle().should('exist');
  loginPage.countrydropdown().should('exist');
  
  cy.wait(1000);
})

Then("Wait untill gets loaded and Perform the click functions on the login page", () => {
  loginPage.email().click();
  cy.wait(1000);
  loginPage.password().click();
  cy.wait(1000);
  loginPage.loginbtn().click();
  cy.wait(1000);
  loginPage.forgotpasswordlinktext().click();
  cy.wait(2000);3
  loginPage.backtologinfromforgot().click();
  cy.wait(2000);
  loginPage.signup().click();
  cy.wait(2000);
  loginPage.backtologinfromsignup().click();
})

Then("Leave the fields empty and directly click the Log In button", () => {
  loginPage.loginbtn().click();
  cy.wait(2000);
  loginPage.emailrequired().should('exist');
  cy.wait(2000);
  loginPage.passwordrequired().should('exist');
  
})

Then("Enter the invalid email id", () => {

  loginPage.email().should('exist').type("sample123@yopmail.com");

})

Then("Enter the registered email id", () => {
 loginPage.email().should('exist').type("admin@yopmail.com");

})

Then("Enter the invalid password", () => {

 loginPage.password().should('exist').type("sample123@yopmail.com");
})

Then("Enter the registered password", () => {
  loginPage.password().should('exist').type("Test@123");
})

Then("Click the Remember me checkbox", () => {
  loginPage.remembermecheckbox().click();
})

Then("Click Log In button", () => {
  loginPage.loginbtn().click();
  cy.screenshot()
})

Then("User clicks the forgot your password? link text", () => {
  loginPage.forgotpasswordlinktext().click();
  
  cy.wait(3000);
  cy.screenshot();

})
Then("User clicks the click here to signup link text", () => {
  loginPage.signup().click();
  cy.screenshot()

})

Then("Click the eye icon and the field shows the password characters.", () => {
  loginPage.password().should('exist').type("sample@yopmail.com");
  loginPage.eyeclick().click();
  cy.wait(2000);
})

Then("Again, click the eye icon and the field hides the password characters and vice versa.", () => {
loginPage.eyeclick().click();
})


Then("Enter login details and click on login button.", () => {
  loginPage.email().should('exist').type("admin@yopmail.com");
  loginPage.password().should('exist').type("Test@123");
  loginPage.remembermecheckbox().click();
  loginPage.loginbtn().click();
  
  })



