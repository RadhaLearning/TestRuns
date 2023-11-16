class LoginPage {

  email(){
    return  cy.xpath('//input[@placeholder="E-mail"]');
  }
  
  password(){
    return  cy.xpath('//input[@type="password"]');
  }
  remembermecheckbox(){
    return cy.xpath('//input[@value="remember"]');
  }
  forgotpasswordlinktext(){
    return cy.xpath('//p[text()="Forget your password?"]');
  }

  loginbtn(){
    return  cy.xpath('//button[text()="Log in"]');
  }

  signup(){
    return  cy.xpath('//span[text()="Click here to Sign up!"]');
  }
  
  emailrequired(){
    return  cy.xpath('//p[text()="Email is required"]');
  }
  invalidemail(){
   return cy.xpath('//p[text()="Invalid email"]');
  }
  passwordrequired(){
   return cy.xpath('//p[text()="Password is required"]')
  }
  helplinktext(){
    return cy.xpath('//a[contains(text(),"Help")]');
  }
  termslinktext(){
    return cy.xpath('//a[contains(text(),"Terms")]');
  }
  loginpagetitle(){
    return cy.xpath('//a[contains(text(),"Privacy")]')
  }
  countrydropdown(){
    return cy.xpath('//div[text()="English (United states)"]')
  }
 backtologinfromforgot(){
    return cy.xpath('//span[text()="log in!"]');
  }

backtologinfromsignup(){
    return cy.xpath('//span[text()="Click here to log in."]');
  }

  eyeclick(){
    return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root');
  }

}

export const loginPage = new LoginPage();

export default loginPage;



