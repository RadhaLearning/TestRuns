class ForgotPage {
 
  forgotPageTitle(){
    return cy.xpath('//h5[text()="Forgot Password"]');
  }
  forgotlinkText(){
    return cy.xpath('//p[text()="Forget your password?"]');
  }
  emailInput(){
    return cy.xpath('//input[@placeholder="E-Mail"]');
  }
  captchaInput(){
    return cy.xpath('//input[@placeholder="Captcha"]');
  }
  nextBtn(){
    return cy.xpath('//button[text()="Next"]');
  }
  loginlinkedtext(){
    return cy.xpath('//span[text()="log in!"]');
  }
  invalidEmail(){
    return cy.xpath('//p[text()="Invalid email"]')
  }
  emailRequired(){
    return  cy.xpath('//p[text()="Email is required"]')
  }
  captchaRequired(){
    return  cy.xpath('//p[text()="Captcha is required"]');
  }

EnterCaptcha() {
  // Extract the captcha text
  cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiBox-root')
    .invoke('text')
    .then((text) => {
      cy.log(`Element text: ${text}`);
      // Enter captcha
      forgotPage.captchaInput().type(`${text}`);
    });
}
}

export const forgotPage = new ForgotPage();
