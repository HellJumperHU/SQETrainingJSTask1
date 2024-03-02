Feature: The Internet Guinea Pig Website


  ##  Scenario Outline: 1. As a user, I can log into the secure area

  ##    Given I am on the login page
  ##    When I login with <username> and <password>
  ##    Then I should see a flash message saying <message>

  ##   Examples:
  ##     | username | password             | message                        |
  ##     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  ##     | foobar   | barfoo               | Your username is invalid!      |

  Scenario: 1. As a guest user I should be able to register


  ##Scenario: 2. As a logged in user I should be adble to log out
  ##  Given I am on the "Main" page
  ##  When I click on the "Logout button"
  ##  Then the "Main" page should be displayed
  ##  And the "Header login link" should be visible

  Scenario: 3. As a guest user I should be able to log in
    Given I am on the "Main" page
    When I click on the "Login link"
    Then the "Login" page should be displayed
    And the "Welcome message" should be visible
    And the "New customer field" should be visible
    And the "Returning customer field" should be visible
    And the "Email text" should be visible
    And the "Email inputfield" should be visible
    And the "Password text" should be visible
    And the "Password inputfield" should be visible
    And the "Remember me checkbox" should be visible
    And the "Remember me text" should be visible
    And the "Forgot password" should be visible
    And the "Login button" should be visible

    When I fill the "Email" inputfield with "tesztelek@test.test"
    And I fill the "Password" inputfield with "testpass"
    And I click on the "Login button"
    Then the "Main" page should be displayed
    And the "Username link" should be visible
    And the "Logout link" should be visible

  Scenario: 4. The Computers groups should have the proper amount of subg-roups
    Given I am on the "Main" page
    When I click on the "Computers category"
    Then the "Computers" page should be displayed
    And the "Computers title" should be visible
    And the "Computers list" element should have "3" sub-elements
    And the "1" sub-element of "Computers category" should be "Desktops"
    And the "2" sub-element of "Computers category" should be "Notebooks"
    And the "3" sub-element of "Computers category" should be "Accessories"

  Scenario: 5 As a user I should be able to change the sorting of the listed items
    Given I am on the "Desktop" page
    When the sorting is changed to "A-Z"
    Then the "first" item name is saved as "firstItem"
    And the "last" item name is saved as "lastItem"

    When the sorting is changed to "Z-A"
    Then the "first" item name should be "lastItem"
    And the "last" item name should be "firstItem"

    When the sorting is changed to "A-Z"
    Then the "first" item name should be "firstItem"
    And the "last" item name should be "lastItem"

    When the sorting is changed to "MostExpensive-Cheapest"
    Then the "first" item name is saved as "firstItem"
    And the "last" item name is saved as "lastItem"

    When the sorting is changed to "Cheapest-MostExpensive"
    Then the "first" item name should be "lastItem"
    And the "last" item name should be "firstItem"

    When the sorting is changed to "Cheapest-MostExpensive"
    Then the "first" item name should be "firstItem"
    And the "last" item name should be "lastItem"
