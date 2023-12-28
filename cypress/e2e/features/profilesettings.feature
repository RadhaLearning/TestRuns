Feature: Assets page

    Feature Assets page will work depending on the user credentials.

    Background: 
        Given A web browser is at the Testrunz login page.
        Then Enter the registered email id.
        Then Enter the registered password. 
        Then Click the Remember me checkbox. 
        Then Click Log In button.
        Then Click the Settings module which is located in the sidebar.

   #    Scenario: TC_TRUNZ_06_01: Verify whether the user successfully navigates to Settings page.
   #       Then Ensure that the user lands on Settings page.
  
   #   Scenario: TC_TRUNZ_06_02: Verify whether the Settings page is as per The Figma UI.
   #       Then  Compare the application UI with the Figma manually.
   #       Then  Ensure that the All Fields are present and labelled correctly.
     
   #   Scenario: TC_TRUNZ_06_03: To validate the functionality of Profile settings when it is clicked.
   #       Then  Click Profile Settings in settings side menu.
   #       Then  Ensure that the Settings Menu is clickable and a General settings displays when profile settings is  clicked.
     
   #   Scenario: TC_TRUNZ_06_04: Verify when User able to Search Settings in the search field. 
   #       Then  Enter Settings Name and click Search.
   #       Then  Verify that the User able to see the Settings Details after search.

     
   #   Scenario: TC_TRUNZ_06_05: To check if the user gets an error message when they click the search button without any settings.
   #       Then  Search for Settings using any name. 
   #       Then  Verify that the page displays no results found.

     
   #   Scenario: TC_TRUNZ_06_06: To validate the functionality of with empty search.
   #       Then  Directly click the search field
   #       Then  Verify that the page displays remain unchanged.

     
   #   Scenario: TC_TRUNZ_06_07: To validate the functionality of searching non settings.
   #       Then  Click Profile Settings in settings side menu.
   #       Then  Search with non existing Settings options.
   #       Then  Verify that the page displays no results found.

     
   #   Scenario: TC_TRUNZ_06_08: To validate the functionality of Editing Profile Appearance. 
   #       Then  Click Profile Settings in settings side menu.
   #       Then Click Edit your Profile apperance link text.
   #       Then  Verify that the User able to see the Profile Apperance Settings when it clicks.

     
   #   Scenario: TC_TRUNZ_06_09: Verify whether the user successfully navigates to General Settings page.
   #       Then  Click Profile Settings in settings side menu.
   #       Then  Verify that the User able to see the General Settings after click Profile Settings.

     
   #   Scenario: TC_TRUNZ_06_10: Verify whether the General Settings page is as per The Figma UI.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Ensure that the  All Fields are present and labelled correctly in General settings.

     
   #   Scenario: TC_TRUNZ_06_11: Verify whether the Mandatory Fields are shown in  General Settings page  as per The Figma UI.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Ensure that the Mandatory Fields are present and labelled correctly for required fields.
     
   #   Scenario: TC_TRUNZ_06_12: Verify whether the Required error message is showing for mandatory fields.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Save without filling all fields.
   #      Then  Ensure that  All the Mandatory Fields are showning Required Error message.   

   #   Scenario: TC_TRUNZ_06_13: Verify whether the First Name fields allows only Alapha characters.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click First name and enter Allowable Alpha character between 5-15.
   #      Then  Ensure that the User able to enter in First name fields with Aplha characters. 

   #   Scenario: TC_TRUNZ_06_14: Verify whether the Last Name fields allows only Alapha characters.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Last name and enter Allowable Alpha character between 5-15.
   #      Then  Ensure that the User able to enter in Last name fields with Aplha characters. 

   #   Scenario: TC_TRUNZ_06_15: Verify whether the E-mail field shows invalid email address.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click E-mail and enter invalid email address.
   #      Then  Ensure that the Invalid Email error are shown. 

   #   Scenario: TC_TRUNZ_06_16: Verify whether the E-mail field shows valid email address.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click E-mail and enter valid email address and ensure its accepted.

    
   #   Scenario: TC_TRUNZ_06_17: Verify whether the organisation name shows in suggestion.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Organisation and enter its details.
   #      Then  Ensure that the Organisation name is suggested default while entering in it.

    
   #   Scenario: TC_TRUNZ_06_18: Verify whether able to enter the Labs-assigned name in its field.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Labs assigned and enter its details.
   #      Then  Ensure that the entered Labs assigned name is accepted. 
    
   #   Scenario: TC_TRUNZ_06_19: Verify whether the Designation name shows in suggestion and able to click it.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Designation and enter its details.
   #      Then  Ensure that the Designation name is suggested default while entering in it. 
    
   #   Scenario: TC_TRUNZ_06_20: Verify whether the Designation field is in Disactive state.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Ensure that the Designation name are present in its field by default.

    
   #   Scenario: TC_TRUNZ_06_21: Verify whether the ID field is in Disactive state.
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Ensure that the ID  are present in its field by default.

    
   #   Scenario: TC_TRUNZ_06_22: Verify whether the Change Password settings is viewable. 
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Change Password dropdown.
   #      Then  Ensure that the change password settings is shown its older details.

    
   #   Scenario: TC_TRUNZ_06_23: Verify whether the old password is shown by default. 
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Change Password dropdown.
   #      Then  Ensure that the old password details are shown in change password settings.
    
   #   Scenario: TC_TRUNZ_06_24: Verify whether the user able to enter  New & confirm password with Same strong characters. 
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Change Password dropdown.
   #      Then  Enter new & confirm password with allowable character include Numeric,Uppercase & Lowercase.

    
   #   Scenario: TC_TRUNZ_06_24: Verify whether the user able to enter  New & confirm password with Weak characters. 
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Change Password dropdown.
   #      Then  Enter new & confirm password with allowable character notincluded Numeric,Uppercase & Lowercase.

    
   #   Scenario: TC_TRUNZ_06_25: Verify whether the user able to enter and view the Entered New & confirm password through eye icon. 
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Change Password dropdown.
   #      Then  Enter new & confirm password with allowable character include Numeric,Uppercase & Lowercase.
   #      Then  Click eye icon and Ensure that the Entered New & Confirm Password values are visible.
 
   #   Scenario: TC_TRUNZ_06_26: Verify whether the user able to enter  New & confirm password with Minimun characters. 
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Change Password dropdown.
   #      Then  Enter a weak password without Uppercase and number.

    
   #   Scenario: TC_TRUNZ_06_27: Verify whether the user able to save the details after edits. 
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Change Password dropdown.
   #      Then Enter new & confirm password with same allowable character with Numeric,Uppercase & Lowercase.
   #      Then Click save and Ensure that the successfully saved message is displayed.

    
    
   #   Scenario: TC_TRUNZ_06_28: Verify whether the user able to go back to previous menu.   
   #      Then  Click Profile Settings in settings side menu.
   #      Then  Click Change Password dropdown.
   #      Then  Click back button and Ensure that the Previous menu is visited.







