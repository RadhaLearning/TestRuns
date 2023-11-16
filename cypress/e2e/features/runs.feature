Feature: Runs page

    Feature Runs page will work depending on the user credentials.

    Background: 
        Given A web browser is at the Testrunz login page
        Then Enter the registered email id.
        Then Enter the registered password. 
        Then Click the Remember me checkbox. 
        Then Click Log In button.
        Then Click Runs in side menu.

   Scenario: TC_TRUNZ_08_01: To validate the functionality of Runs Page is show as per Figma UI after login
        Then Ensure that the Runs Page is shown as per Figma UI.
    
   Scenario: TC_TRUNZ_08_02: Verify when User able to Search tasks in Nav bar search field.
         Then  Click Search field and enter text to search task.
         Then  Verify that the User able to see the Runs Details after search.


     
   Scenario: TC_TRUNZ_08_03: Verify when User able to see the Notification details through bell icon.
         Then  Click Bell icon in Nav Bar.
         Then  Verify that the Notification Details are displayed in Pop-up screen.


   Scenario: TC_TRUNZ_08_04: Verify when User able to see the Profile Information through Profile icon.
         Then  Click Profile icon in Nav Bar.
         Then  Verify that the Profile Info Details are displayed in Pop-up screen.
     
   Scenario: TC_TRUNZ_08_05: Verify when User able to change the User Interface Theme.
         Then  Click Theme icon in Nav Bar.
         Then  Verify that the Application are displayed in dark theme.
     
   Scenario: TC_TRUNZ_08_06: Verify when User able to Navigate all the Page through Side Menu.
         Then Ensure that the required page is displayed with its details.
         Then  Click side menu wisely and observe its redirect to respective page.
     
   Scenario: TC_TRUNZ_08_08: Verify when User able to Create New Runs in Runs Page from +Add button.
         Then  Click +Add button.
         Then  Ensure that the Create New Runs pop-up screen displayed with its fields as per Figma.
     
   Scenario: TC_TRUNZ_08_09:Verify when User able to Cancel the Create New Runs in Runs Page from +Add button.
         Then Click +Add button.
         Then  Click Cancel and Ensure that the Create New Runs pop-up screen is closed.
     
   Scenario: TC_TRUNZ_08_10: Verify when Static Values are displayed in its field by default in create new Runs pop-up screen.
         Then  Click +Add button.
         Then  Ensure that the Static Values are displayed in its fields by default in pop-up screen. 
     
   Scenario: TC_TRUNZ_08_11: Verify that the Mandatory error message is show  in Procedure Name without selecting dropdown values.
         Then Click +Add button.
         Then  Click Create and Ensure that the Error message is displayed for Procedure name field.
     
   Scenario: TC_TRUNZ_08_12: Verify that the user able to set the Due Date in create new runz pop-up screen.
         Then  Click +Add button.
         Then  Click Calender icon in set due date field and choose date wisely.
         Then Ensure that the calender is displayed and user able to select due date. 
     
   Scenario: TC_TRUNZ_08_13: Verify that the user able to Add Assign in create new runz pop-up screen.
         Then Click +Add button.
         Then  Click Add button in Assign to field and ensure add people pop-up screen is displayed.
         Then Select People from add people pop-up screen.
         Then Click save button.
     
   Scenario: TC_TRUNZ_08_14: verify that the user able to create a new runz. 
         Then Click +Add button.
         Then Select Procedure name from dropdown.
         Then Enter Test Objective.
         Then Set due date in calender.
         Then Click Add button in Assign to field and ensure add people pop-up screen is displayed.
         Then Select People from add people pop-up screen.
         Then Click save button.
     
   Scenario: TC_TRUNZ_08_15: Verify whether the Runs Id filter is working as expected. 
         Then Click the Runs Id filter and select the required runs id.
         Then  Verify that the filtered runs is displayed properly based on the runs id.
     
   Scenario: TC_TRUNZ_08_16: Verify whether the Runs Name filter is working as expected. 
         Then Click the Runs Name and enter name in text field.
         Then  Verify that the filtered runs is displayed properly based on the runs name.

   Scenario: TC_TRUNZ_08_17: Verify whether the Department filter is working as expected. 
         Then Click the Department filter and select the required Department. 
         Then  Verify that the filtered runs is displayed properly based on the Department.

  
   Scenario: TC_TRUNZ_08_18: Verify whether the Lab filter is working as expected. 
         Then Click the Lab filter and select the required Lab. 
         Then  Verify that the filtered runs is displayed properly based on the Lab. 
   
   Scenario: TC_TRUNZ_08_19: Verify whether the Created On filter is working as expected. 
         Then Click the Created On filter and select the required date.
         Then  Verify that the filtered runs is displayed properly based on the Created On date.

  
   Scenario: TC_TRUNZ_08_20: Verify whether the Due Date filter is working as expected. 
         Then Click the Created On filter and select the required date.
         Then Click the Due Date filter and select the required date.
         Then Verify that the filtered runs is displayed properly based on the Due date.

  
   Scenario: TC_TRUNZ_08_21: Verify whether the Status  filter is working as expected. 
         Then Click the Created On filter and select the required date.
         Then Click the Status  filter and Enter & search for the required user.
         Then Verify that the filtered runs is displayed properly based on the Status.

  
   Scenario: TC_TRUNZ_08_22: Verify whether the Assigned By filter is working as expected.
         Then  Click the Assigned By filter and search for the required user.
         Then  Verify that the filtered runs is displayed properly based on the Assigned By values.

  
   Scenario: TC_TRUNZ_08_23: Verify whether the Combination of filters are working as expected.
         Then  Click/Search for one or more required filters which is displayed on the top of the  table fields.
         Then  Verify that the filtered runs is displayed properly based on the filters provided.

  
   Scenario: TC_TRUNZ_08_24: Verify whether the Edit Menus are displayed when the user clicks the checkbox of the particular runs.
         Then Click the required checkox which is displayed before the runs id.
         Then Verify that the Edit Menus are displayed on the top of the table.

  
   Scenario: TC_TRUNZ_08_25: Verify whether the Edit Menus are closed when the user unselects the checkbox of the particular runs.
         Then  Click the selected checkox which is displayed before the runs id.
         Then  Verify that the Edit Menus are closed.

  
   Scenario: TC_TRUNZ_08_26: Verify whether the Edit Menus options are closed when the user clicks the Close action button.
         Then Click the Close Actions button.
         Then  Verify that the Edit Menus options are closed.

  
   Scenario: TC_TRUNZ_08_27: Verify whether all the runs are selected when the user clicks Select all button.
         Then  click the Select all button.
         Then  Verify that all the runs are selected.

  
   Scenario: TC_TRUNZ_08_28: Verify whether all the runs are unselected when the user clicks Deselect all button.
         Then Click the Deselect all button.
         Then  Verify that all the runs are deselected.

  
   Scenario: TC_TRUNZ_08_29: Verify whether the selected runs is deleted when the user clicks delete button.
         Then click the Delete button.
         Then  Verify that the selected runs is deleted.

  
   Scenario: TC_TRUNZ_08_30: Verify whether  the pop-up is displayed for asigning the runs to the people and the assignee is saved.
         Then Search for the people by using search field and click save button.
         Then Verify that the people is assigned for that particular runs is saved.

  
   Scenario: TC_TRUNZ_08_31: Verify whether  the pop-up is displayed for asigning the runs to the people and the assignee is not saved.
         Then Search for the people by using search field and click cancel button.
         Then  Verify that the people is not  assigned for that particular runs when cancel.

  
   Scenario: TC_TRUNZ_08_32: Verify whether  the pop-up is displayed for sharing  the runs to the people is not saved.
         Then Search for the people by using search field and click cancel button.
         Then Verify that the people is not  assigned for that particular runs when cancel.

  
   Scenario: TC_TRUNZ_08_33: Verify whether  the pop-up is displayed for sharing the runs to the people.
         Then Click the share options by selecting the people.
         Then  Verify whether the runs is shared to the people.

  
   Scenario: TC_TRUNZ_08_34: Verify whether the filter dropdown is displayed when the user clicks the three dot link.
         Then Click the three dot link.
         Then  Verify that the dropdowns are displayed.

  
   Scenario: TC_TRUNZ_08_35: Verify whether the table fields are displayed according to the selected checkboxes which is displayed under the three dots.
         Then Click the required fields.
         Then  Verify that the selected fields are displayed in the table.

  
   Scenario: TC_TRUNZ_08_36: Verify that the pagination is present in the botton right corner and functioning properly.
         Then Click the pagination links.
         Then  Verify that the pagination links are redirectable and the table records are displayed properly.

  
   Scenario: TC_TRUNZ_08_37: Verify whether the user redirects to the procedure page when the user clicks anywhere on the particular procedure data.
         Then Click anywhere on the particular procedure data.
         Then  Verify that the user redirects to the procedure page.

  
   Scenario: TC_TRUNZ_08_38: Verify whether the default static data are fetched and user can able to create the procedure in the presented fields and save by clicking save button.
         Then Click anywhere on the particular procedure data.
         Then Enter procedure name and full procedure details.
         Then  Verify that the created procedure is saved successfully.

  
   Scenario: TC_TRUNZ_08_39: Verify whether the default static data are fetched and user can able to create the procedure in the presented fields and it is not saved by clicking cancel button.
         Then Click anywhere on the particular procedure data.
         Then Enter procedure name and full procedure details.
         Then  Verify that the created procedure is not saved.

  
   Scenario: TC_TRUNZ_08_40: Verify whether the default static data are fetched and validation message is shown for filling the fields.
         Then Click anywhere on the particular procedure data.
         Then Leave the fields empty.
         Then  Verify that the validation error message should be displayed.

  
   Scenario: TC_TRUNZ_08_41: Verify whether the default static data are fetched and the user redirects to the previous page by clicking the cancel button.
         Then Click anywhere on the particular procedure data.
         Then Click cancel button.
         Then  Verify that the user redirects to the previous page.


         




