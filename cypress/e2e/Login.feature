Feature: Webdriveruniversity - login Page

    Scenario Outline: Valid & Invalid Username and Password
        Given I navigate the WebdriverUniversity homepage
        When I Click on the Login portal button
        And I type the username <username>
        And I type the password <password>
        And I Click on the Login button
        # Then The system should display <expectedAlertText>

        Examples:
            | username | password | expectedAlertText |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123 | validation failed |