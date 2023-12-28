Feature: Mypage page

    Feature Login page will work depending on the user credentials.

    Background: 
        Given A web browser is at the Testrunz login page
        Then Enter the registered email id
        Then Enter the registered password 
        Then Click the Remember me checkbox 
        Then Click Log In button

    #   Scenario: TC_TRUNZ_01_08: To validate the functionality of My Page is show as per Figma UI after login
    #     Then Ensure that the My Page is shown as per Figma UI.
    
    #  Scenario: TC_TRUNZ_01_02: Verify when User able to Search tasks in Nav bar search field.
    #      Then Click search field and enter text.
    #      Then  Verify that the User able to see the Task Details after search.

