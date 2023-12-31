    Feature: Add New Assets page

    Add New Assets page will work depending on the user actions.

    Background: 
        Given A web browser is at the Testrunz login page
        Then Enter the registered email id
        Then Enter the registered password 
        Then Click the Remember me checkbox 
        Then Click Log In button
        Then Click the Asset module which is located in the sidebar.
        Then Click create assets button.

      Scenario: TC_TRUNZ_04_01: Verify when User able to view  Add a New Asset Pop-Up screen.
        Then Verify that the User able to see the Add new Asset  Pop-Up screen.
  
    #  Scenario: TC_TRUNZ_04_02 - fail: Verify when User able to Upload photo for New Asset.
    #      Then  Click Upload photo button and choose files format JPEG,PNG,GIF.
    #      Then  Verify when User able to Upload photo for New Asset.
     
    #  Scenario: TC_TRUNZ_04_03- fail: Verify Autogenerated Asset ID are shown in Add new Asset.
    #      Then  Verify that the User able to view the Autogenerated Asset ID and ensure the ID value are combined both AlphaNumeric.

     
     Scenario: TC_TRUNZ_04_04: Verify the User see list of fields in Add new asset Pop-Up screen.
        Then Verify the User see list of fields in Add new asset Pop-Up screen.

     
     Scenario: TC_TRUNZ_04_05: Verify that the User Cancel the Add new asset from Add new Asset Pop-Up screen.
         Then  Click Cancel From Add new Asset Pop-Up screen.
         Then  Click Yes from Confirmation screen.
         Then  Ensure it Redirect to Asset Page after click Yes.

     
     Scenario: TC_TRUNZ_04_06: Verify that the User Not Cancel the Add new asset from Confirmation  Pop-Up screen.
         Then  Click Cancel From Add new Asset Pop-Up screen.
         Then  Click No from Confirmation screen.
         Then  Ensure it Redirect to Asset Page after click No.

     Scenario: TC_TRUNZ_04_07: Verify that the User able to Enter Asset Name.
         Then  Click Enter Asset Name Textbox and  enter name with allowed character 8-16 without Numeric.
         
     
     Scenario: TC_TRUNZ_04_08: Verify that the User able to choose the Purchased Date based in Add new Asset page.
         Then  Click Calender icon in Purchase date field and choose date wisely.
         Then  Verify that the User able to choose the Purchased Date based on Asset.

     
     Scenario: TC_TRUNZ_04_09: Verify that the User able to choose the Guaranty/Warranty/Expiry Date based in Add new Asset page.
         Then  Click Calender icon in Guaranty Warranty Expiry date field and choose date wisely.
         Then  Verify that the User able to choose the Guaranty Warranty Expiry Date based on Asset.
     
    #  Scenario: TC_TRUNZ_04_10 - fail: Verify that the User able to Select the Organisation  in Add new Asset page.
    #      Then  Click Organisation Dropdown and Select wisely.

     
     Scenario: TC_TRUNZ_04_11: Verify that the User able to Select the Department in Add new Asset page.
         Then  Click Department Dropdown and Select wisely.
        
     
     Scenario: TC_TRUNZ_04_12: Verify that the User able to Select the Laboratory in Add new Asset page.
         Then  Click Labaratory Dropdown and Select wisely.
        
     
     Scenario: TC_TRUNZ_04_13: Verify that the User able to Select the Status in Add new Asset page.
         Then  Click Status Dropdown and Select wisely.
        
     
     Scenario: TC_TRUNZ_04_14: Verify that the User able to Select the Availability in Add new Asset page.
         Then  Click Availability Dropdown and Select wisely.
      
      
     Scenario: TC_TRUNZ_04_14: Verify that the User able to add new assets.
         Then  Click Enter Asset Name Textbox and  enter name with allowed character 8-16 without Numeric.
         Then  Click Calender icon in Purchase date field and choose date wisely.
         Then  Click Calender icon in Guaranty Warranty Expiry date field and choose date wisely.
         Then  Click Department Dropdown and Select wisely.
          Then  Click Status Dropdown and Select wisely.
         Then  Click Labaratory Dropdown and Select wisely.       
         Then  Click Availability Dropdown and Select wisely.
         Then  Click Create button.