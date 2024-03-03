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

  Scenario: 1 Login
    Given I am on the "Main" page
    When I click on the "Login link"
    Then the "Login" page should be displayed

  Scenario: 9. As a user I should be able to checkout

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

    When I click on the "Add to cart button"
    Then the number of "Cart" product in the link should be "More than" "0"

    When I click on the "Cart link"
    Then the "Cart" page should be displayed
    And the number of "Cart" product on the page should be "More than" "0"
    And the number of "Cart" product in the link should be "More than" "0"
    And the "Cart item checkbox" should be visible
    And the "Cart item update button" should be visible
    And the "Cart confirmarion checkbox" should be visible
    And the "Cart checkout button" should be visible

    When I click on the "Cart confirmarion checkbox"
    And I click on the "Cart checkout button"
    Then the "Checkout" page is displayed
    And the "First name label" should be visible
    And the "Last name label" should be visible
    And the "Email label" should be visible
    And the "Company label" should be visible
    And the "Country dropdown label" should be visible
    And the "State dropdown" should be visible
    And the "City label" should be visible
    And the "Address 1 label" should be visible
    And the "Address 2 label" should be visible
    And the "Zip label" should be visible
    And the "Phone number label" should be visible
    And the "Fax label" should be visible
    And the "First name input" should be visible
    And the "Last name input" should be visible
    And the "Email input" should be visible
    And the "Company input" should be visible
    And the "Country dropdown" should be visible
    And the "State dropdown" should be visible
    And the "City input" should be visible
    And the "Address 1 input" should be visible
    And the "Address 2 input" should be visible
    And the "Zip input" should be visible
    And the "Phone number input" should be visible
    And the "Fax input" should be visible
    And the number of "Checkout required mark" should be "8"
    And the number of "Checkout warning message" should be "5"
    And the "Checkout continue button" should be visible

    When I click on the "Checkout continue button"
    Then the number of "Checkout warning message" should be "5"
    And the "1" of "Warning message" should be "Country is required."
    And the "2" of "Warning message" should be "City is required."
    And the "3" of "Warning message" should be "Street address is required."
    And the "4" of "Warning message" should be "Zip / postal code is required."
    And the "5" of "Warning message" should be "Phone is required."

    When I fill the "City input" inputfield with "Nevada"
    And I fill the " Address 1 input" inputfield with "123456"
    And I fill the " Zip input" inputfield with "123456"
    And I fill the " Phone input" inputfield with "123456"
    And I fill the " Address 2 input" inputfield with "123456"
    Then the number of "Checkout warning message" should be "1"

    When I select the "1" option of the "Country dropdown" dropdown



    And the "" should be visible
    And the "" should be visible
    And the "" should be visible
    And the "" should be visible
    And the "" should be visible
    And the "" should be visible
    And the "" should be visible
    And the "" should be visible
    And the "" should be visible
    And the "" should be visible
