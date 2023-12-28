class ProcedurePage{

    createprocedura(){
        return cy.xpath('//button[text()="Create Procedure"]');
    }
    
    procedurepopupprocedureid(){
        return cy.xpath('(//input[@id="procedureId"])[1]');
    }
    procedurepopupcreatedon(){
        return cy.xpath('(//input[@inputmode="text"])[2]');
    }
    procedurepopupdepartment(){
        return cy.xpath('//input[@id="departmentId"]');
    }
    procedurepopuplaboratory(){
        return cy.xpath('(//label[text()="Laboratory"]/following::input)[1]');
    }
    procedurepopupprocedurename(){
        return cy.xpath('//input[@placeholder="Procedure Name"]');
    }
    procedurepopupdepartdropdown(){
        return cy.xpath('//input[@placeholder="Department/s"]');
    }
    
    proceduredepartvalue(){
        return cy.get('#departmentId-option-0');
    }
    procedurelabvalue(){
        return cy.get('#departmentId-option-0');
    }
    procedurepopuplabdropdown(){
        return cy.xpath('//input[@placeholder="Laboratory/ies"]');
    }
    procedurepopupcreate(){
        return cy.xpath('//button[text()="Create"]');
    }

    proceduresidemenu(){
        return cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiListItemIcon-root');
    }

    
    procedureidsort(){
        return cy.xpath('//span[text()="Procedure ID"]');
    }
    procedurenamesort(){
        return cy.xpath('//span[text()="Procedure Name"]');
    }
   
    createdbysort(){
        return cy.xpath('//span[text()="Created by"]');
    }
    
    
    procedureiddropdown(){
        return cy.xpath('(//span[text()="Procedure ID"]/following::input)[1]');
    }
    procedurenamesearch(){
        return cy.xpath('(//input[@id="Search"])[3]');
    }
   
    createdbydropdown(){
        return cy.xpath('(//span[text()="Created by"]/following::input)[1]');
    }
   
    tablecheckbox(){
        return cy.xpath('(//input[@type="checkbox"])[1]');
    }
    closeaction(){
        return cy.xpath('//button[text()="Close actions"]');
    }
    selectallcheckbox(){
        return cy.xpath('(//input[@class="PrivateSwitchBase-input css-1m9pwf3"])[1]');
    }
    deleteallcheckbox(){
        return cy.xpath('(//input[@class="PrivateSwitchBase-input css-1m9pwf3"])[2]');
    }
    delete(){
        return cy.xpath('//img[@alt="Delete"]');
    }
    assign(){
        return cy.xpath('//img[@alt="assign"]');
    }
    share(){
        return cy.xpath('//img[@alt="Share"]');
    }
    pagination(){
        return cy.xpath('(//ul[@class="MuiPagination-ul css-nhb8h9"]//li)[3]');
    }

    logoutprofile(){
        return cy.xpath('(//img[@alt="help_icon"])[3]');
    }
    logout(){
        return cy.xpath('//p[text()="Logout"]');
    }
    procedurecancel(){
        return cy.xpath('(//button[text()="Cancel"])[3]');
    }
    procedurecancelyes(){
        return cy.xpath('(//button[text()="Yes"])[1]');
    }
    departmenterror(){
        return cy.xpath('//p[text()="Department is required"]');
    }
    laboratoryerror(){
        return cy.xpath('//p[text()="Laboratory is required"]');
    }
    procedurenameerror(){
        return cy.xpath('//p[text()="Procedure name is required"]');
    }
    firstproceduredetails(){
        return cy.xpath('(//td[contains(@class,"MuiTableCell-root MuiTableCell-body")])[2]');
    }
    procedureedits(){
        return cy.xpath('//button[text()="Edit"]');
    }
    procedurename(){
        return cy.xpath('//input[@placeholder="Procedure Name"]');
    }
    
    

    
    }

    export const procedurePage = new ProcedurePage();