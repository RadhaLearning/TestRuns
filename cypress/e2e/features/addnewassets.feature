    Feature: Add New Assets page

    Add New Assets page will work depending on the user actions.

    Background: 
        Given A web browser is at the Testrunz login page
        Then Enter login details and click on login button.
        Then Click the Asset module which is located in the sidebar.
        
      
     Scenario: TC_TRUNZ_04_01: Verify that the User able to add new assets.
         Then  Click create assets button.
         Then  Click and upload Assets image.
         Then  Click Enter Asset Name Textbox and  enter name with allowed character 8-16 without Numeric.
         Then  Click Calender icon in Purchase date field and choose date wisely.
         Then  Click Calender icon in Guaranty Warranty Expiry date field and choose date wisely.
         Then  Click Department Dropdown and Select wisely.
         Then  Click Organisation Dropdown and Select wisely.       
         Then  Click Status Dropdown and Select wisely.          
         Then  Click Availability Dropdown and Select wisely.
         Then  Click Labaratory Dropdown and Select wisely.
         Then  Click Create button.

      Scenario: TC_TRUNZ_04_13: Verify that the user able to edit the Assets details.
        Then  Click the assets that needs to be edited.
        Then  Edit the the assets details.
        Then  Click save button.

     
      
     Scenario: TC_TRUNZ_04_02: Verify that the user able to access the close action Menu's.
         Then  Click Assets Name checkbox.
         Then  Click Select All checkbox.
         Then  Click Deselect All checkbox.
        #  Then  Click share button.
        #  Then  Select people and Click save button.
         Then  Click Delete button.
         Then  Click Delete Yes button.
         Then  Verify that the Assets are deleted successfully.

     Scenario: TC_TRUNZ_04_03: Verify that the user able to change the Assets ststus functionality.
         Then  Click Status dropdown and change values accordinly.
         Then  Click Availability dropdown and change values accordinly.

     Scenario: TC_TRUNZ_04_04: Verify that the user able to filter the Assets details based on Assets ID.
         Then  Click filter options.
         Then  Click search by option and choose Assets ID.
         Then  Select required Asset ID in dropdown. 
         Then  Click show results button. 
         Then  Observe the Filtered assets are shown in table. 

     Scenario: TC_TRUNZ_04_05: Verify that the user able to filter the Assets details based on Assets Name.
         Then  Click filter options.
         Then  Click search by option and choose Assets Name.
         Then  Enter the Assets name in checkbox. 
         Then  Click show results button. 
         Then  Observe the Filtered assets are shown in table.

      Scenario: TC_TRUNZ_04_06: Verify that the user able to filter the Assets details based on Department.
         Then  Click filter options.
         Then  Click search by option and Department.
         Then  Select required Department in dropdown. 
         Then  Click show results button. 
         Then  Observe the Filtered assets are shown in table.

      Scenario: TC_TRUNZ_04_07: Verify that the user able to filter the Assets details based on Lab.
         Then  Click filter options.
         Then  Click search by option and choose Lab.
         Then  Select required Lab in dropdown. 
         Then  Click show results button. 
         Then  Observe the Filtered assets are shown in table.

      Scenario: TC_TRUNZ_04_08: Verify that the user able to filter the Assets details based on Purshed on date.
         Then  Click filter options.
         Then  Click search by option and choose Purchased on.
         Then  Select required date choose wisely. 
         Then  Click show results button. 
         Then  Observe the Filtered assets are shown in table.

      Scenario: TC_TRUNZ_04_09: Verify that the user able to filter the Assets details based on Last Used Date.
         Then  Click filter options.
         Then  Click search by option and choose last used date.
         Then  Select required last used date choose wisely. 
         Then  Click show results button. 
         Then  Observe the Filtered assets are shown in table.

      Scenario: TC_TRUNZ_04_10: Verify that the user able to filter the Assets details based on Status.
         Then  Click filter options.
         Then  Click search by option and choose Status.
         Then  Select required status in dropdown. 
         Then  Click show results button. 
         Then  Observe the Filtered assets are shown in table.

      Scenario: TC_TRUNZ_04_11: Verify that the user able to filter the Assets details based on Availability.
         Then  Click filter options.
         Then  Click search by option and choose Avaiability.
         Then  Select required Availability in dropdown. 
         Then  Click show results button. 
         Then  Observe the Filtered assets are shown in table.

     Scenario: TC_TRUNZ_04_12: Verify that the Mandatory fields are shown error message.
        Then  Click create assets button.
        Then  Click Create button.
        Then  Verify that the mandatory error message are displayed.

    

        
         
        