class AssetsPage{

    assetssidemenu(){
        return cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiListItemIcon-root > img');
    }
        
    createassets(){
        return cy.xpath('(//div[@class="buttonFilter"]//button)[1]');
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
    popimageupload(){
        return cy.xpath('//input[@type="file"]');
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
        return cy.get('.css-nfk862 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root');
    }
    popuporganisation(){
        return cy.xpath('//div[text()="Select Organization"]');
    }
    popuporganisationoptions(){
        return cy.xpath('(//li[@role="option"])[1]');
    }
    popupdepartment(){
        return cy.xpath('//input[@placeholder="Department/s"]');
    }
    popupdepartmentoptions(){
        return cy.get('#departmentId-option-0');
    }
    popuplaboratory(){
        return cy.get('#laboratoryId');
    }
    popuplaboratoryoptions(){
        return cy.get('#laboratoryId-option-0');
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
    popupavailablestatus(){
        return cy.xpath('//li[@data-value="In_Use"]');
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

    thermometer(){
        return cy.xpath('//div[text()="Thermometer"]');
    }

    assetsdetailsname(){
        return cy.get('#name');
    }
    pdate(){
        return cy.xpath('(//input[@placeholder="MM/DD/YYYY"])[1]')
    }
    gdate(){
        return cy.xpath('(//input[@placeholder="MM/DD/YYYY"])[2]')
    }
    assetsdetailspurchasedate(){
        return cy.get('.css-1gff878 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root');
    }
    assetsdetailspurchasechoosedate(){
        return cy.get('[data-timestamp="1700245800000"]');
    }

    assetsdetailsguarantydate(){
        return cy.get('.css-nfk862 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root');
    }
    assetsdetailsorganisation(){
        return cy.get('#organisationId > div');
    }
    assetsdetailsorganisationdropdown(){
        return cy.get('#menu-organisationId > .MuiPaper-root > .MuiList-root > [tabindex="-1"]');
    }
    assetsdetailsdepartment(){
        return cy.get('.css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #departmentId');
    }
    assetsdetailsdepartmentdropdown(){
        return cy.xpath('');
    }
    assetsdetailslaboratory(){
        return cy.xpath('(//input[@id="departmentId"])[2]')
    }
    assetsdetailslaboratorydropdown(){
        return cy.get('#departmentId-option-3')
    }

    assetsdetailsstatus(){
        return cy.xpath('(//div[contains(@class,"MuiSelect-select MuiSelect-outlined")])[2]');
    }

    assetsdetailsstatusdropdown(){
        return cy.xpath('//li[@data-value="Inactive"]');
    }

    assetsdetailsavailability(){
        return cy.xpath('(//div[contains(@class,"MuiSelect-select MuiSelect-outlined")])[3]');
    }

    assetsdetailsavailabilitydropdown(){
        return cy.xpath('//li[@data-value="In_Use"]');
    }

    assetsdetailssave(){
        return cy.xpath('//button[text()="Save"]');
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
    deleteyes(){
        return cy.xpath('(//button[text()="Yes"])[2]');
    }
    assign(){
        return cy.xpath('//img[@alt="assign"]');
    }
    share(){
        return cy.xpath('//img[@alt="Share"]');
    }
    sharesave(){
        return cy.xpath('(//button[text()="Save"])[2]');
    }
    pagination(){
        return cy.xpath('(//ul[@class="MuiPagination-ul css-nhb8h9"]//li)[3]');
    }
    status(){
       // return cy.get(':nth-child(1) > :nth-child(7) > .MuiInputBase-root > #mui-component-select-status');
       return cy.xpath('(//div[text()="Active"])[1]');
    }
    active(){
        return cy.get('.MuiList-root > .Mui-selected');
    }
    inactive(){
        return cy.get('#menu-status > .MuiPaper-root > .MuiList-root > [tabindex="-1"]');
    }
    availablestatus(){
        return cy.xpath('(//div[text()="Available"])[1]');
    }
    inuse(){
        return cy.xpath('//li[@data-value="In_Use"]');
    }
    
    filter(){
        return cy.xpath('//span[contains(@class,"MuiBadge-root red-badge-filter")]//img[1]');
    }

    searchby(){
        return cy.xpath('//div[text()="Search by"]');
    }
    assetsid(){
        return cy.xpath('//li[text()="Assets ID"]');
    }
    assetsname(){
        return cy.xpath('//li[text()="Assets name"]');
    }
    assetsdepartment(){
        return cy.xpath('//li[text()="Department"]');
    }
    assetslab(){
        return cy.xpath('//li[text()="Lab"]');
    }
    assetspurchasedon(){
        return cy.xpath('//li[text()="Purchased on"]');
    }
    datepurchaseon(){
        return cy.xpath('(//button[@aria-label="Choose date"])[3]');
    }
    assetslastused(){
        return cy.xpath('//li[text()="Last used"]');
    }
    assetsfilterstatus(){
        return cy.xpath('//li[text()="Status"]');
    }
    assetsfilteravailability(){
        return cy.xpath('//li[text()="Availability"]');
    }
    filtersearchtextbox(){
        return cy.xpath('//input[@placeholder="Search"]');
    }
    select(){
        return cy.xpath('//div[text()="Select"]');
    }
    selectoptions(){
        return cy.xpath('(//li[@role="option"])[1]');
    }
    showresults(){
        return cy.xpath('//button[text()="Show results"]');
    }
    assetserrormessage(){
        return cy.xpath('//p[text()="Asset Name is required"]');
    }
    purchasedateerrormessage(){
        return cy.xpath('//p[text()="Purchase date required"]');
    }
    organisationerrormessage(){
        return cy.xpath('//p[text()="Organisation is required"]');
    }
    departmenterrormessage(){
        return cy.xpath('//p[text()="Please select at least one Department"]');
    }
    laboratoryerrormessage(){
        return cy.xpath('//p[text()="Please select at least one Laboratory"]');
    }
    statuserrormessage(){
        return cy.xpath('//p[text()="Status is required"]');
    }
    availabilityerrormessage(){
        return cy.xpath('//p[text()="Availability is required"]');
    }
    displayedassets(){
        return cy.xpath('//table[@class="MuiTable-root MuiTable-stickyHeader css-3tzftu"]').eq(2).find('td').eq(1).click();
    }
    assetseditsave(){
        return cy.xpath('//button[text()="Save"]');
    }
  
    }

    export const assetsPage = new AssetsPage();