Feature: WebdriverUniversity - Contact Us Page
    Scenario: Valid Contact Us Form Submission
        Given I navigate the WebdriverUniversity homepage
        When I click on the Contact us button
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then The system should display a Successful message as a feedback

    Scenario: Invalid Contact Us Form Submission: Omit Email Address
        Given I navigate the WebdriverUniversity homepage
        When I click on the Contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then The system should display Invalid Email Address as a feedback

    Scenario: Valid Contact Us Form Submission - Using specific data
        Given I navigate the WebdriverUniversity homepage
        When I click on the Contact us button
        And I type a specific first name "Agboola"
        And I type a specific last name "Daramola"
        And I enter a specific email address "agbooladaramola7@gmail.com"
        And I type a specific word "My Whatsapp number is " and number 2349033083268 within the comment input field
        And I click on the submit button
        Then The system should display a Successful message as a feedback