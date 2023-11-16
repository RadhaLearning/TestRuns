import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { forgotPage } from '@pages/ForgotPage';


Then("Without entering Registered Email Id & Captcha click next button", () => {
  forgotPage.nextBtn().click();
})

Then("Without Entering Registered Email ID and Enter captcha and click Next button.", () => {
  cy.wait(3000);
  forgotPage.EnterCaptcha();
  cy.wait(3000);
 forgotPage.nextBtn().click();
})

Then("Without Entering Captcha and Enter Email id and click Next button.", () => {
  forgotPage.emailInput().type('gobi@yopmail.com');
  forgotPage.nextBtn().click();
})

Then("Click Back to Login link text.", () => {
  forgotPage.loginlinkedtext().click();
})

Then("Enter Registered E-mail Id & Valid Captcha and click Next button.", () => {
 forgotPage.emailInput().type('gobi@yopmail.com');
 cy.wait(3000);
  forgotPage.EnterCaptcha();
  forgotPage.nextBtn().click();
})

// Then("Enter Invalid OTP in OTP field.", () =>{



// })
