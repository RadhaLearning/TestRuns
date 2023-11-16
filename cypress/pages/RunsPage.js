class RunsPage{

    createruns(){
        return cy.xpath('(//button[contains(@class,"MuiButtonBase-root MuiButton-root")])[1]');
    }
    
    searchruns(){
        return cy.xpath('(//input[@id="Search"])[1]');
    }
    
    filter(){
        return cy.xpath('(//button[contains(@class,"MuiButtonBase-root MuiButton-root")])[2]');
    }
    
    sortbyfilter(){
        return cy.xpath('//div[text()="Sort By"]');
    }
    showresultsfilter(){
        return cy.xpath('//button[text()="Show results"]');
    }
    clearfilter(){
        return cy.xpath('//button[text()="Clear"]');
    }
    popupprocedureID(){
        return cy.xpath('(//input[@id="procedureId"])[2]');
    }
    popupcreatedon(){
        return cy.xpath('(//input[@inputmode="text"])[3]');
    }
    popuppdepartment(){
        return cy.xpath('(//label[text()="Department"]/following::input)[1]');
    }
    popuplaboratory(){
        return cy.xpath('(//label[text()="Laboratory"]/following::input)[1]');
    }
    popupprocedurename(){
        return cy.xpath('//div[@id="select-popup"]//div[1]');
    }
    popuptestobjective(){
        return cy.xpath('//input[@placeholder="Test objective"]');
    }
    popupsetduedate(){
        return cy.xpath('(//label[text()="Set due date"]/following::input)[1]');
    }
    popupcreatebtn(){
        return cy.xpath('//button[text()="Create"]');
    }
    popupcancelbtn(){
        return cy.xpath('(//button[text()="Cancel"])[3]');
    }
    popupassignto(){
        return cy.xpath('(//button[text()="Add"])[2]');
    }
    runsidsort(){
        return cy.xpath('//span[text()="Runs ID"]');
    }
    runsnamesort(){
        return cy.xpath('//span[text()="Runs Name"]');
    }
    departmentsort(){
        return cy.xpath('//span[text()="Department"]');
    }
    labsort(){
        return cy.xpath('//span[text()="Lab"]');
    }
    ceatedonsort(){
        return cy.xpath('//span[text()="Created On"]');
    }
    duedatesort(){
        return cy.xpath('//span[text()="Due Date"]');
    }
    statussort(){
        return cy.xpath('//span[text()="Status"]');
    }
    assigbedbysort(){
        return cy.xpath('//span[text()="Assigned By"]');
    }
    runsiddropdown(){
        return cy.xpath('(//input[@id="Search"])[2]');
    }
    runsnamesearch(){
        return cy.xpath('(//input[@id="Search"])[3]');
    }
    departmentdropdown(){
        return cy.xpath('(//span[text()="Department"]/following::input)[1]');
    }
    labdropdown(){
        return cy.xpath('(//span[text()="Lab"]/following::input)[1]');
    }
    ceatedoncalender(){
        return cy.xpath('(//input[@inputmode="numeric"])[1]');
    }
    duedatecalender(){
        return cy.xpath('(//input[@inputmode="numeric"])[2]');
    }
    statusdropdown(){
        return cy.xpath('(//span[text()="Status"]/following::input)[1]');
    }
    assigbedbydropdown(){
        return cy.xpath('(//span[text()="Assigned By"]/following::input)[1]');
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
    
    export const runsPage = new RunsPage();