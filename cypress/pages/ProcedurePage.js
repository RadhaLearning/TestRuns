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
        return cy.xpath('//label[text()="Procedure name"]/following::input');
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

    
    
    }

    export const procedurePage = new ProcedurePage();