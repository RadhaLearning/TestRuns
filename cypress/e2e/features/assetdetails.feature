Feature: Assets page

    Feature Assets page will work depending on the user credentials.

    Background: 
        Given A web browser is at the Testrunz login page
        Then Enter the registered email id
        Then Enter the registered password 
        Then Click the Remember me checkbox 
        Then Click Log In button
        Then Click the Asset module which is located in the sidebar.
        Then Click anywhere on the particular Asset records in Asset page.

    #   Scenario: TC_TRUNZ_05_01: To validate the functionality of visiting Asset Edit details page.
    #      Then Verify that the user able to visit Asset Edit details in Assert details page.
  
    #  Scenario: TC_TRUNZ_05_02: To validate the functionality of name field in edit details of an asset.
    #      Then  Enter Asset name in edit asset details page.
    #      Then  Verify that the system enforces the maximum length for the first name and last name fields.
     
    #  Scenario: TC_TRUNZ_05_03: To validate the functionality of asset id in edit details of an asset.
    #      Then  Verify that the field is displayed with a predefined default value and un-editable.
     
    #  Scenario: TC_TRUNZ_05_04: To validate the functionality of Valid Purchase Date. 
    #      Then  Click Purchase calender and choose date wisely.
    #      Then  Verify that the User able to choose Date from calender.

     
    #  Scenario: TC_TRUNZ_05_05: To validate the functionality of Invalid purchase date - future date.
    #      Then  User cannot see or click the future date field.
           
    #  Scenario: TC_TRUNZ_05_06: To validate the functionality of Invalid purchase date - Empty Field.
    #      Then  The user leaves the field empty.
    #      Then  The input is invalid because it's an empty field. The system should reject it and provide an error message.

       
    #  Scenario: TC_TRUNZ_05_07: To validate the functionality of valid guarantee warranty expiry date.
    #      Then  Verify that the User able to choose guarantee Date from calender.

       
    #  Scenario: TC_TRUNZ_05_08: To validate the functionality of valid guarantee warranty expiry date - past date.
    #      Then  User cannot see or click the past date field.
    #      Then The input is invalid because it's a future date. The system should reject it and provide an error message.

       
    #  Scenario: TC_TRUNZ_05_09: To validate the functionality of valid guarantee warranty expiry date - empty field.
    #      Then  The user leaves the field empty.
    #      Then  The input is invalid because it's an empty field. The system should reject it and provide an error message.

       
    #  Scenario: TC_TRUNZ_05_10: To validate the functionality of the dropdown fields.
    #      Then  Select the required value and it is displayed in that field.
    #      Then  Verify that the selected option is displayed and the dropdown behaves responsively.

       
    #  Scenario: TC_TRUNZ_05_11: To validate the functionality of Save button.
    #      Then Click the Save button.
    #      Then Asset details will be succesfully saved and a pop-up will be displayed.

       
    #  Scenario: TC_TRUNZ_05_12: To validate the functionality of "Back" button.
    #      Then Click the Back button.
    #      Then Verify that the changes made is not saved and goes back to previous page.

       
    #  Scenario: TC_TRUNZ_05_13: To validate the functionality of Successful Photo Upload.
    #      Then Select multiple photos from the file system and click upload.
    #      Then Verify that users can successfully upload a photo.

       
    #  Scenario: TC_TRUNZ_05_14: To validate the functionality of "Multiple Photo Upload" 
    #      Then Select multiple photos from the file system and click upload.
    #      Then  Verify that all selected photos are shouldn't be displayed or previewed on the page and throws validation.
       
    #  Scenario: TC_TRUNZ_05_15: To validate the functionality of File Format Validation.
    #      Then  Attempt to upload a photo with an invalid file format.
    #      Then Verify that the system provides an error message indicating the invalid file format.

       
    #  Scenario: TC_TRUNZ_05_16: To validate the functionality of File Size Validation.
    #      Then  Attempt to upload a photo that exceeds the maximum allowed file size.
    #      Then  Verify that the system provides an error message indicating the file size exceeds the limit.
       
    #  Scenario: TC_TRUNZ_05_17: To validate the functionality of Cancel Photo Upload.
    #      Then  Click on the Upload Photo button.
    #      Then  Select a photo from the file system.
    #      Then  Click on the Cancel or Close button before completing the upload.
    #      Then  Verify that the upload process is canceled, and the selected photo is not uploaded.

        
    #  Scenario: TC_TRUNZ_05_18: To validate the functionality of UI Consistency in Photo Preview.
    #      Then  Upload a photo from different devices and browsers.
    #      Then  Verify that the preview of the uploaded photo is consistent and displays properly across all tested devices and browsers.

        
    #  Scenario: TC_TRUNZ_05_19: To validate the functionality of visiting Asset History page.
    #      Then  Click History tab in Asset details.
    #      Then  Verify that the user able to visit History in Assert details page.

        
    #  Scenario: TC_TRUNZ_05_20: Verify whether the history of the particular Asset is displayed with the Asset image, id, name.
    #      Then  View the History of the particular  Asset.
    #      Then  Verify that the user able to see the history of the particular Asset.
     
      
     Scenario: TC_TRUNZ_05_21: Verify whether the user able to edit the assets details.
         Then  Enter Asset name in edit asset details page.
         Then  Click Purchase calender and choose date wisely.
         Then  Verify that the User able to choose guarantee Date from calender.
         Then  Verify that user able to select organisation from dropdown.
         Then  verify that user able to select department from dropdown.
         Then  verify that user able to select laboratory from dropdown.
         Then  verify that user able to select status from dropdown.
         Then  verify that user able to select availability from dropdown.
         Then  Click Save button.
     