class AssetsPage{

    assetssidemenu(){
        return cy.xpath('(//div[@role="button"])[5]');
    }
        
    createassets(){
        return cy.xpath('(//button[contains(@class,"MuiButtonBase-root MuiButton-root")])[1]');
    }
    
    searchassets(){
        return cy.xpath('(//input[@id="Search"])[1]');
    }
   
    popupheadname(){
        return cy.xpath('//p[text()="create"]');
    }
    popupassetnametitle(){
        return cy.xpath('//label[text()="Assets name"]');
    }
    popuppurchasetitle(){
        return cy.xpath('//label[text()="Purchase date"]');
    }
    popupguarentytitle(){
        return cy.xpath('//label[text()="Guaranty/warranty/expiry date"]');
    }
    popuporganisationtitle(){
        return cy.xpath('//label[text()="Organisation"]');
    }
    popupdepartmenttitle(){
        return cy.xpath('//label[text()="Department/s"]');
    }
    popuplaboratorytitle(){
        return cy.xpath('//label[text()="Laboratory/ies"]');
    }
    popupstatustitle(){
        return cy.xpath('//label[text()="Status"]');
    }
    popupavailabilitytitle(){
        return cy.xpath('//label[text()="Availability"]');
    }
    popupassetsname(){
        return cy.xpath('//input[@placeholder="Assets name"]');
    }
    popuppurchasedate(){
        return cy.get('.css-1gff878 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root');
    }
    purchasedatechoose(){
        return cy.get('[data-timestamp="1700850600000"]');
    }
    popupguarantydate(){
        return cy.xpath('//button[@aria-label="Choose date"]');
    }
    popuporganisation(){
        return cy.xpath('//div[text()="Select Organization"]');
    }
    popupdepartment(){
        return cy.get('#organisationId');
    }
    popupdepartmentoptions(){
        return cy.get('#organisationId-option-0');
    }
    popuplaboratory(){
        return cy.get(':nth-child(5) > .MuiGrid-root > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #departmentId');
    }
    popuplaboratoryoptions(){
        return cy.get('#departmentId-option-2');
    }
    popupstatus(){
        return cy.xpath('//div[text()="Select Status"]');
    }
    statusinactive(){
        return cy.xpath('//li[@data-value="Inactive"]');
    }
    popupavailability(){
        return cy.xpath('//div[text()="Select Availability"]');
    }
    availablestatus(){
        return cy.xpath('//li[@data-value="Available"]');
    }
    popupassetid(){
        return cy.xpath('//input[@placeholder="Assets Id"]');
    }
    popupchoosefile(){
        return cy.xpath('//input[@type="file"]');
    }
    popupadd(){
        return cy.xpath('(//button[text()="Add"])[2]');
    }

    popupcancel(){
        return cy.xpath('(//button[text()="Cancel"])[3]');
    }
    popupcreate(){
        return cy.xpath('//button[text()="Create"]');
    }

    confirmyes(){
        return cy.xpath('(//button[text()="Yes"])[1]');
    }
    confirmno(){
        return cy.xpath('(//button[text()="No"])[1]');
    }




    assetsiddropdown(){
        return cy.xpath('(//input[@id="Search"])[2]');
    }
    assetsnamesearch(){
        return cy.xpath('(//input[@id="Search"])[3]');
    }
    assetsdepartmentdropdown(){
        return cy.xpath('(//span[text()="Department"]/following::input)[1]');
    }
    assetslabdropdown(){
        return cy.xpath('(//span[text()="Lab"]/following::input)[1]');
    }
    assetspurchasedoncalender(){
        return cy.xpath('(//span[text()="Purchased on"]/following::input)[1]');
    }
    assetslastusedcalender(){
        return cy.xpath('(//span[text()=Last used"]/following::input)[1]');
    }
    assetsstatusdropdown(){
        return cy.xpath('(//span[text()="Status"]/following::input)[1]');
    }
    assetsavailabilitydropdown(){
        return cy.xpath('(//span[text()="Availability"]/following::input)[1]');
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

    export const assetsPage = new AssetsPage();