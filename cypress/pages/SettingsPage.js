class SettingsPage{

    
    searchsettings(){
        return cy.xpath('//input[@placeholder="Search"]');
    }
    notificationssettings(){
        return cy.xpath(' //span[text()="Notification settings"]');
    }
    profilesettings(){
        return cy.xpath('//span[text()="Profile settings"]');
    }
    usermanagementsettings(){
        return cy.xpath('//span[text()="User management"]');
    }
    rolemanagementsettings(){
        return cy.xpath('//span[text()="Role management"]');
    }
    

   
    profgeneralarrow(){
        return cy.xpath('(//div[contains(@class,"MuiAccordionSummary-content Mui-expanded")]/following-sibling::div)[1]');
    }
    profchangepasswordarrow(){
        return cy.xpath('(//div[@class="MuiAccordionSummary-expandIconWrapper css-1fx8m19"])[2]');
    }
    generalfirstname(){
        return cy.xpath('//input[@placeholder="First name"]');
    }
    generallastname(){
        return cy.xpath('//input[@placeholder="Last name"]');
    }
    generalemail(){
        return cy.xpath('//input[@placeholder="Email"]');
    }
    generalmobile(){
        return cy.xpath('//input[@placeholder="Mobile number"]');
    }
    generalorganisation(){
        return cy.xpath('//div[text()="Select Organization"]');
    }
    generaldepartment(){
        return cy.xpath('(//label[text()="Department/s"]/following::input)[1]');
    }
    generallabassigned(){
        return cy.xpath('(//label[text()="Labs assigned"]/following::input)[1]');
    }
    generaldesignation(){
        return cy.xpath('(//label[text()="Designation"]/following::input)[1]');
    }
    generalrequestertesterid(){
        return cy.xpath('(//label[text()="Requestor ID/Tester ID"]/following::input)[1]');
    }
  
    

    profoldpassword(){
        return cy.xpath('//input[@placeholder="Password"]');
    }
    
    profnewpassword(){
        return cy.xpath('//input[@placeholder="New Password"]');
    }
    profconfirmpassword(){
        return cy.xpath('//input[@placeholder="Confirm Password"]');
    }
    profsave(){
        return cy.xpath('//button[text()="Save"]');
    }
    
    profback(){
        return cy.xpath('//button[text()="Back"]');
    }
    

    adduserinmanagement(){
        return cy.xpath('//button[text()="Add User"]');
    }
    searchinusermanagement(){
        return cy.xpath('(//input[@placeholder="Search"])[1]');
    }
    useridinusermanagement(){
        return cy.xpath('(//input[contains(@class,"MuiInputBase-input MuiOutlinedInput-input")])[2]');
    }
    usernameinusermanagement(){
        return cy.xpath('(//input[@name="search"])[1]');
    }
    departmentinusermanagement(){
        return cy.xpath('(//span[text()="Department"]/following::input)[1]');
    }
    categoryinusermanagement(){
        return cy.xpath('(//span[text()="Category"]/following::input)[1]');
    }
    addedoninusermanagement(){
        return cy.xpath('(//span[text()="Added on"]/following::input)[1]');
    }
    roleinusermanagement(){
        return cy.xpath('(//span[text()="Role"]/following::input)[1]');
    }
    statusinusermanagement(){
        return cy.xpath('(//span[text()="Status"]/following::input)[1]');
    }   

    
    }

    export const settingsPage = new SettingsPage();