Feature: Assets page

    Feature UserManagement page will work depending on the user credentials.

    Background: 
        Given A web browser is at the Testrunz login page.
        When Enter the registered email id.
        When Enter the registered password. 
        When Click the Remember me checkbox. 
        When Click Log In button.
        When Click the Settings module which is located in the sidebar.

      Scenario: TC_TRUNZ_07_01: To validate the functionality of User Management when it is clicked.
         Then Click User Management  in settings side menu.
         Then Ensure that the User Management is clickable  displays the User settings.
  
     Scenario: TC_TRUNZ_07_02: Verify when User able to Search User  in the search field.
         Then Click User Management  in settings side menu.
         Then Enter Username in Search field and click it.
         Then Verify that the User able to see the User Details after search.  
     
     Scenario: TC_TRUNZ_07_03: To check if the user gets an error message when they click the search button without any text.
         Then Click User Management  in settings side menu.
         Then Enter Invalid name in Search field and click it.
         Then Verify that the page displays no results found.
     
     Scenario: TC_TRUNZ_07_04: To check the functionality of adding new user from User Management.
        Then Click User Management  in settings side menu.
        Then Click Add new Button.
        Then Verify that the Create new user Pop-screen is displayed.

    
     Scenario: TC_TRUNZ_07_05: To check the functionality of sorting User Details in ascending order.
        Then Click User Management  in settings side menu.
        Then Click on the sorting menu, which is usually represented as a dropdown or a set of sorting options.
        Then Select the sorting option Alphabetical A-Z from the menu.
        Then Verify that the menu items are now sorted in ascending alphabetical order.   
    
     Scenario: TC_TRUNZ_07_06: To check the functionality of sorting User Details in decending order.
        Then Click User Management  in settings side menu.
        Then Click on the sorting menu, which is usually represented as a dropdown or a set of sorting options.
        Then Select the sorting option Alphabetical Z-A from the menu.
        Then Verify that the menu items are now sorted in descending alphabetical order.
       

    
     Scenario: TC_TRUNZ_07_07: To check the functionality of sorting Users based on Date. 
         Then Click User Management  in settings side menu.
         Then Click on the sorting menu, which is usually represented as a dropdown or a set of sorting options.
         Then Choose Date wisely.
         Then Verify that the User are sorted based on selected date.
    
     Scenario: TC_TRUNZ_07_08: To check the functionality of sorting Users based on Roles.
         Then Click User Management  in settings side menu.
         Then Click on the sorting menu, which is usually represented as a dropdown or a set of sorting options.
         Then Choose Roles wisely.
         Then Verify that the User are sorted based on selected Roles.

    
     Scenario: TC_TRUNZ_07_09: To check the functionality of sorting Users based on Status.
         Then Click User Management  in settings side menu.
         Then Click on the sorting menu, which is usually represented as a dropdown or a set of sorting options.
         Then Choose Status wisely.
         Then Verify that the User are sorted based on selected Status.

    
     Scenario: TC_TRUNZ_07_10: To check the functionality of Department dropdown.
         Then Click User Management  in settings side menu.
         Then Click the Department dropdown in table header and choose wisely.
         Then Verify that the User are listed based on selected dropdown.

    
     Scenario: TC_TRUNZ_07_11: To check the functionality of Category dropdown.
         Then Click User Management  in settings side menu.
         Then Click the Category dropdown in table header and choose wisely.
         Then Verify that the User are listed based on selected category dropdown.

    
     Scenario: TC_TRUNZ_07_12: To check the functionality of listing Users based on Date.
         Then Click User Management  in settings side menu.
         Then Click the Date in table header and choose wisely.
         Then Verify that the User are listed based on selected date.

    
     Scenario: TC_TRUNZ_07_13: To check the functionality of searching user based on Roles.
         Then Click User Management  in settings side menu.
         Then Click Roles in table header and enter roles name  wisely.
         Then Verify that the User are listed based on Roles.

    
     Scenario: TC_TRUNZ_07_14: To check the functionality of Deleting User request.
         Then Click User Management  in settings side menu.
         Then Click individual user checkbox and ensure delete options enabled in top of table.
         Then Click Delete in header and confirm Yes.
         Then Verify User Deleted Successfully message are displayed.

     
     Scenario: TC_TRUNZ_07_15: To check the functionality of Close Actions after clicking checkbox.
         Then Click User Management  in settings side menu.
         Then Click individual user checkbox and ensure delete options enabled in top of table.
         Then Click Close Actions.
         Then Ensure that all the actions are closed . 

     
     Scenario: TC_TRUNZ_07_16: To check the functionality of Selecting All the user request and perform actions. 
         Then Click User Management  in settings side menu.
         Then Click individual user checkbox and ensure delete options enabled in top of table.
         Then Click select all checkbox.
         Then Ensure that all the User request checkbox are selected. 
     
     Scenario: TC_TRUNZ_07_17: To check the functionality of Deselecting All the user request and perform actions.
         Then Click User Management  in settings side menu.
         Then Click individual user checkbox and ensure delete options enabled in top of table.
         Then Click Deselect all checkbox.
         Then Ensure that the seleced User request checkbox are deselected. 

     
     Scenario: TC_TRUNZ_07_18: To check the functionality of changing user status to active.
         Then Click User Management  in settings side menu.
         Then Click Status dropdown and click Active checkbox.
         Then Ensure that the User status changed to Active state. 
     
     Scenario: TC_TRUNZ_07_19: To check the functionality of changing user status to Inactive.
         Then Click User Management  in settings side menu.
         Then Click Status dropdown and click InActive checkbox.
         Then Ensure that the User status changed to Inactive state.
     
     
    

    

