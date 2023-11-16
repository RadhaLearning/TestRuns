Feature: Forgot page

    Feature Login page will work depending on the user credentials.

    Background: 
        Given A web browser is at the Testrunz login page   

    Scenario: TC_TRUNZ_02_01: Verify the Forgotten Page is as per The Figma UI
        Then User clicks the forgot your password? link text

    Scenario: TC_TRUNZ_02_02: Verify when user does not enters Registered email Id & captcha and click Next, show error message
        Then User clicks the forgot your password? link text
        Then Without entering Registered Email Id & Captcha click next button
    
    Scenario: TC_TRUNZ_02_03: Verify when user Enter Captcha & does not enters Registered email
        Then User clicks the forgot your password? link text
        Then Without Entering Registered Email ID and Enter captcha and click Next button.
    
    Scenario: TC_TRUNZ_02_04: Verify when user enters Registered email and does not enter Captcha 
        Then User clicks the forgot your password? link text
        Then Without Entering Captcha and Enter Email id and click Next button.

    Scenario: TC_TRUNZ_02_05: Verify the user redirect from forgotten page to Login Page 
        Then User clicks the forgot your password? link text
        Then Click Back to Login link text.

    Scenario: TC_TRUNZ_02_06: Verify when user enters registered email & Correct Captcha for forgot password option, it should redirect to OTP screen
        Then User clicks the forgot your password? link text
        Then Enter Registered E-mail Id & Valid Captcha and click Next button.

    Scenario: TC_TRUNZ_02_07: Verify when user click "Back to Login" from Enter OTP page.
        Then User clicks the forgot your password? link text
        Then Enter Registered E-mail Id & Valid Captcha and click Next button.
        Then Click Back to Login link text.

    Scenario: TC_TRUNZ_02_08: Verify when user enters Wrong OTP in OTP screen and see "Error Message".
        Then User clicks the forgot your password? link text
        Then Enter Registered E-mail Id & Valid Captcha and click Next button.
      #  Then Enter Invalid OTP in OTP field.
    
    Scenario: TC_TRUNZ_02_09: Verify when user Click "Resend OTP" in Enter OTP Page.
        Then User clicks the forgot your password? link text
        Then Enter Registered E-mail Id & Valid Captcha and click Next button.
      #  Then Click Resend OTP link text.

    
    Scenario: TC_TRUNZ_02_10: Verify when user Click "Resend OTP" in Enter OTP Page.
        Then User clicks the forgot your password? link text
        Then Enter Registered E-mail Id & Valid Captcha and click Next button.
       # Then Enter OTP in OTP field and click verify button
    
    Scenario: TC_TRUNZ_02_11: Verify the user has following screen in the UI Page for Reset Password
        Then User clicks the forgot your password? link text
        Then Enter Registered E-mail Id & Valid Captcha and click Next button.
      #  Then Enter OTP in OTP field and click verify button