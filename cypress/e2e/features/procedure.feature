Feature: Procedure page

    Feature Procedure page will work depending on the user credentials.

    Background:
        Given A web browser is at the Testrunz login page
        Then Enter login details and click on login button.
        Then Click procedure in side menu.

    Scenario: TC_TRUNZ_5_01: Verify the functionality of creating New procedure and editing the created procedure details.

        #  Then  Enter Procedure Name.
        Then  Create an New Procedure.
        Then  Edit Procedure details.

    Scenario: TC_TRUNZ_5_02: Verify that the user cancel the create procedure pop-up screen.
        Then  Click create procedure button.
        Then  Cancel the create procedure screen.


    Scenario: TC_TRUNZ_5_03: Verify that the Mandatory error message are displayed.
        Then  Click create procedure button.
        Then  Check Mandatory error message are displayed.


    Scenario: TC_TRUNZ_5_04: Verify that the user able to Delete the procedure.
        Then  Deleting the created procedure.

    Scenario: TC_TRUNZ_5_05: Verify that the user able to filter the Procedure details based on procedure Name.
        Then  Filter the Procedure details based on Procedure Name.

    Scenario: TC_TRUNZ_5_05: Verify that the user able to filter the Procedure details based on Department.
        Then  Filter the Procedure details based on Department.

    Scenario: TC_TRUNZ_5_05: Verify that the user able to filter the Procedure details based on Lab.
        Then  Filter the Procedure details based on Lab.

    Scenario: TC_TRUNZ_5_05: Verify that the user able to filter the Procedure details based on created on date.
        Then  Filter the Procedure details based on created on.

    Scenario: TC_TRUNZ_5_05: Verify that the user able to filter the Procedure details based on created by.
        Then  Filter the Procedure details based on created by.










