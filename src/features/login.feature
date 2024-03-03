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

  Scenario: 7. As a user I should be able to add items to the wishlist
    Given I am on the "Cloth" page
    When I click on the "1" of "Product tile"
    Then the "Product detail" page should be displayed
    And the "Product container" should be visible
    And the "Product Image" should be visible
    And the "Product overview container" should be visible
    And the "Product name" should be visible
    And the "Product stock" should be visible
    And the "Product attributes" should be visible
    And the "Product price" should be visible
    And the "Add to cart button" should be visible
    And the "Wishlist button" should be visible

    When I click on the "Wishlist button"
    Then the number of "wishlisted" product in the "wishlist" link should be "more than" 0
    And the "Notification meessage" should be visible

    When I click on the "Wishlist link"
    Then the "Wishlist" page should be displayed
    And the number of "wishlisted" product on the "wishlist" page should be "more than" 0
    And the number of "wishlisted" product in the "wishlist" link should be "more than" 0
