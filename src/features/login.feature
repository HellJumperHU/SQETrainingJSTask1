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
  @freeUpProductVariable
  Scenario Outline: 5<n>Scenario Outline name: 5a As a user I should be able to change the sorting of the listed items based on <orderType>
    Given I am on the "Desktop" page
    When the sorting is changed to "<order1>"
    And the "1" item name is saved as "0"
    And the "6" item name is saved as "1"

    When the sorting is changed to "<order2>"
    Then the "1" item name should be "1"
    And the "6" item name should be "0"

    When the sorting is changed to "<order1>"
    Then the "1" item name should be "0"
    And the "6" item name should be "1"

    Examples:
      | n | orderType | order1                 | order2                 |
      | 1 | abc       | A-Z                    | Z-A                    |
      | 2 | price     | MostExpensive-Cheapest | Cheapest-MostExpensive |