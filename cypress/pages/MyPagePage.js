class MyPagePage {

    mypagesidemenu(){
     return cy.xpath('(//div[@class="MuiListItemIcon-root css-1f8bwsm"])[1]');
    }
    runsmenu(){
     return cy.xpath('(//div[contains(@class,"MuiButtonBase-root MuiListItemButton-root")])[2]');
    }
   
   proceduremenu(){
     return cy.xpath('(//div[contains(@class,"MuiButtonBase-root MuiListItemButton-root")])[3]');
   }
   projectmenu(){
     return cy.xpath('(//div[contains(@class,"MuiButtonBase-root MuiListItemButton-root")])[4]');
   }
   assetsemenu(){
     return cy.xpath('(//div[contains(@class,"MuiButtonBase-root MuiListItemButton-root")])[5]');
   }
 
   settingsemenu(){
     return cy.xpath('(//div[contains(@class,"MuiButtonBase-root MuiListItemButton-root")])[6]');
   }
 
   billingandsubscriptionsemenu(){
     return cy.xpath('(//div[contains(@class,"MuiButtonBase-root MuiListItemButton-root")])[7]');
   }
   searchtask(){
     return cy.xpath('//div[contains(@class,"MuiInputBase-root MuiOutlinedInput-root")]');
   }
   bellicon(){
     return cy.xpath('(//img[@class="app-bar-images"])[2]');
   }
   darktheme(){
     return cy.xpath('//button[@aria-label="dark icon"]//img[1]');
   }
 
   firstname(){
     return cy.xpath('//input[@placeholder="First name"]');
   }
   
   lastname(){
     return cy.xpath('//input[@placeholder="First name"]');
   }
 
   email(){
     return cy.xpath('((//span[text()='*'])[3]/following::input)[1]');
   }
 
   mobile(){
     return cy.xpath('(//label[text()="Mobile"]/following::input)[1]');
   }
   organisation(){
     return cy.xpath('(//input[@id="Organisation"])[1]');
   }
   department(){
     return cy.xpath('(//label[text()="Department"]/following::input)[1]');
   }
   designation(){
     return cy.xpath('(//label[text()="Designation"]/following::input)[1]');
   }
   requestertesterID(){
     return cy.xpath('//input[@placeholder="Requestor ID/Tester ID"]');
   }
   logout(){
     return cy.xpath('//p[text()="Logout"]');
   }
 
   editprofile(){
     return cy.xpath('//button[text()="Edit profile"]');
   }
 
   profilephotoupload(){
     return cy.xpath('//img[@alt="profile"]/following-sibling::img[1]');
   }
 
 
 
 
 }
 export const mypagePage = new MyPagePage();
   