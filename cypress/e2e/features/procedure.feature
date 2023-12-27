Feature: Procedure page

    Feature Procedure page will work depending on the user credentials.

    Background: 
        Given A web browser is at the Testrunz login page
        Then Enter the registered email id
        Then Enter the registered password 
        Then Click the Remember me checkbox 
        Then Click Log In button
        Then Click procedure in side menu.

#    Scenario: TC_TRUNZ_10_01: To validate the functionality of creating new procedure.
#         Then Click Create Procedure button.
#         Then 

#    Scenario: TC_TRUNZ_10_01: To validate the functionality of procedure Page is show as per Figma UI after login.
#         Then Ensure that the Procedure Page is shown as per Figma UI.
    
#    Scenario: TC_TRUNZ_10_02: Verify when User able to Search tasks for datas which is present in the table.
#          Then  Click Search field and enter text that are present in the table datas.
#          Then  Verify that the User able to see the Procedure Details after search.

   
#    Scenario: TC_TRUNZ_10_03: Verify when User able to Search tasks for datas which is not present in the table.
#          Then  Click Search field and enter text that are not present in the table datas.
#          Then Verify that the No result found message displays after search.

    
#    Scenario: TC_TRUNZ_10_04: Verify when User able to Create New Procedure in Procedure Page from +Add button.
#          Then Click +Add button.
#          Then Fill the required fields and click create button.
#          Then Ensure that the Create New Procedure pop-up screen displayed with its fields as per Figma.

   
#    Scenario: TC_TRUNZ_10_05: Verify when User able to Cancel the Create New Procedure in Runs Procedure from +Add button.
#          Then Click +Add button.
#          Then Click Cancel button.
#          Then Ensure that the Create New Procedure pop-up  screen is closed.

          
#    Scenario: TC_TRUNZ_10_06: Verify when Static Values are displayed in its field by default in create new Procedure pop-up screen.
#          Then Click +Add button.
#          Then Ensure that the Static Values are displayed in its fields by default in pop-up screen. 

    
#    Scenario: TC_TRUNZ_10_07: Verify that the Mandatory error message is show in Procedure Name without selecting dropdown values and clicks Create button.
#          Then Click +Add button.
#          Then Click Create button.
#          Then Ensure that the Error message is displayed for Procedure name field.

   
#    Scenario: TC_TRUNZ_10_08: Verify that the dropdown fields & values are present and functioning in the Department & Laboratory fields.
#          Then Click +Add button.
#          Then Click Department Laboratory field and select any one of the dropdown.
#          Then Ensure that the dropdowns are present & selected dropdown value is displayed in the respective fields.

          
#    Scenario: TC_TRUNZ_10_09: Verify whether the Procedure Id filter is working as expected.
#          Then Click the Procedure  Id filter and select the required procedure id.
#          Then Verify that the filtered asset is displayed properly based on the asset id.
    
#    Scenario: TC_TRUNZ_10_10: Verify whether the Procedure name filter is working as expected.
#          Then Click the Procedure name filter and search for the required procedure using procedure name.
#          Then Verify that the filtered procedure is displayed properly based on the Procedure name.

   
#    Scenario: TC_TRUNZ_10_11: Verify whether the Department filter is working as expected.
#          Then Click the Department filter and select the required Department.
#          Then Verify that the filtered asset is displayed properly based on the Department.

          
#    Scenario: TC_TRUNZ_10_12: Verify whether the Lab filter is working as expected.
#          Then Click the Lab filter and select the required Lab.
#          Then Verify that the filtered asset is displayed properly based on the Lab.
    
#    Scenario: TC_TRUNZ_10_13: Verify whether the Created On filter is working as expected.
#          Then Click the Created On filter and select the required date.
#          Then Verify that the filtered asset is displayed properly based on the Created On date.

   
#    Scenario: TC_TRUNZ_10_14: Verify whether the Created By filter is working as expected.
#          Then Click the Created By filter and search for the required user.
#          Then Verify that the filtered asset is displayed properly based on the user.
          
#    Scenario: TC_TRUNZ_10_15: Verify whether the Combination of filters are working as expected.
#          Then Click/Search for one or more required filters which is displayed on the top od the fields.
#          Then Verify that the filtered asset is displayed properly based on the filters provided.
    
#    Scenario: TC_TRUNZ_10_16: Verify whether the Edit Menus are displayed when the user clicks the checkbox of the particular procedure.
#          Then Click the required checkox which is displayed before the procedure id.
#          Then Verify that the Edit Menus are displayed on the top of the table.

   
#    Scenario: TC_TRUNZ_10_17: Verify whether the Edit Menus are closed when the user unselects the checkbox of the particular procedure.
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then  Unselect checkox which is displayed before the procedure id.
#          Then Verify that the Edit Menus are closed.

          
#    Scenario: TC_TRUNZ_10_18: Verify whether the Edit Menus options are closed when the user clicks the Close action button. 
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then  click the Close Actions button.
#          Then  Verify that the Edit Menus are closed.

    
#    Scenario: TC_TRUNZ_10_19: Verify whether all the procedures are selected when the user clicks Select all button.
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then click the Select all button.
#          Then Verify that all the procedures are selected.

   
#    Scenario: TC_TRUNZ_10_20: Verify whether all the procedures are unselected when the user clicks Deselect all button.
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then click the Deselect all button.
#          Then Verify that all the procedures are deselected.

          
#    Scenario: TC_TRUNZ_10_21:  Verify whether the selected procedure is deleted when the user clicks delete button.
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then click the Delete button.
#          Then Verify that the selected procedure is deleted.

#    Scenario: TC_TRUNZ_10_22: Verify whether  the pop-up is displayed for asigning the procedure to the people and the assignee is saved.
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then Search for the people by using search field and click save button.
#          Then Verify that the people is assigned for that particular procedure is saved.

   
#    Scenario: TC_TRUNZ_10_23: Verify whether  the pop-up is displayed for asigning the procedure to the people and the assignee is saved.
#          Then Click the required checkox which is displayed before the procedure id.
#          Then Search for the people by using search field and click cancel button.
#          Then Verify that the people is assigned for that particular procedure is not saved.
          
#    Scenario: TC_TRUNZ_10_24: Verify whether  the pop-up is displayed for sharing the procedure to the people.
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then Click the share options by selecting the people.
#          Then Verify whether the procedure is shared to the people.

    
#    Scenario: TC_TRUNZ_10_25: Verify whether the filter dropdown is displayed when the user clicks the three dot link.
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then Click the three dot link.
#          Then Verify that the dropdowns are displayed.
 
   
#    Scenario: TC_TRUNZ_10_26: Verify whether the table fields are displayed according to the selected checkboxes which is displayed under the three dots.
#          Then  Click the required checkox which is displayed before the procedure id.
#          Then Click the required fields.
#          Then Verify that the selected fields are displayed in the table.

   
#    Scenario: TC_TRUNZ_10_27: Verify that the pagination is present in the botton right corner and functioning properly.
#          Then Click the pagination links.
#          Then Verify that the pagination links are redirectable and the table records are displayed properly.
 
  
#    Scenario: TC_TRUNZ_10_28: Verify whether the user redirects to the procedure page when the user clicks anywhere on the particular procedure data.
#          Then Click anywhere on the particular procedure data.
#          Then Verify that the user redirects to the procedure page.
 
#    Scenario: TC_TRUNZ_10_29: Verify whether the default static data are fetched and user can able to create the procedure in the presented fields and save by clicking save button.
#          Then Click anywhere on the particular procedure data.
#          Then Enter procedure name and full procedure details.
#          Then Verify that the created procedure is saved successfully.
 
#    Scenario: TC_TRUNZ_10_30: Verify whether the default static data are fetched and user can able to create the procedure in the presented fields and it is not saved by clicking cancel button.
#          Then  Click anywhere on the particular procedure data.
#          Then Enter procedure name and full procedure details.
#          Then Verify that the created procedure is not saved.

 
#    Scenario: TC_TRUNZ_10_31: Verify whether the default static data are fetched and validation message is shown for filling the fields.
#          Then  Click anywhere on the particular procedure data.
#          Then  Leave the fields empty.
#          Then  Verify that the validation error message should be displayed.

  
#    Scenario: TC_TRUNZ_10_32:Verify whether the default static data are fetched and the user redirects to the previous page by clicking the cancel button.
#          Then  Click anywhere on the particular procedure data.
#          Then  Click cancel button.
#          Then  Verify that the user redirects to the previous page.


   Scenario: TC_TRUNZ_5_01: Verify the functionality of creating New procedure.
         Then  Click Create Procedure button.
         Then  Click Department dropdown.
         Then  Click Laboratory dropdown.
         Then  Enter Procedure Name.
         Then  Click Procedure Create button.

    
   Scenario: TC_TRUNZ_5_02: Verify that the user cancel the create procedure pop-up screen.
         Then  Click Create Procedure button.
         Then  Click Cancel button.
         Then  Click Yes from confirmation.
         
   Scenario: TC_TRUNZ_5_03: Verify that the Mandatory error message are displayed.
         Then  Click Create Procedure button.
         Then  Click Procedure Create button.
         Then  Check Mandatory error message are displayed.

               
   Scenario: TC_TRUNZ_5_04: Verify that the user able to edit the created procedure details.
         Then  Click created procedure if its exist in table.
         Then  Click edit options and rewrite the procedure name.
         Then  Click update button and verify that the toaster message is displayed.

   Scenario: TC_TRUNZ_5_05: Verify that the user able to Delete the procedure.
         Then  Click created procedure checkbox.
         Then  Click Delete option in close action menu.
         Then  Click update button and verify that the toaster message is displayed.
         
        
         






