Feature: Test automation suite for the https://demowebshop.tricentis.com website to make its testing easier

  Scenario Outline: 1<n>. As a guest user I should be able to register as <gender>
    Given I am on the "Registration" page
    Then the "Female radio button" should be visible
    And the "Male radio button" should be visible
    And the "Register first name label" should be visible
    And the "Register last name label" should be visible
    And the "Register email label" should be visible
    And the "Register first name input" should be visible
    And the "Register last name input" should be visible
    And the "Register email input" should be visible

    When I fill the "Register first name input" inputfield with "<firstName>"
    And I fill the "Register last name input" inputfield with "<lastName>"
    And I fill the "Register email input" inputfield with "<email>"
    And I fill the "Register password1" inputfield with "<password>"
    And I fill the "Register password2" inputfield with "<password>"
    And I click on the "<gender> radio button"
    And I click on the "Register button"
    Then the "RegistrationSuccess" page should be displayed
    And the "Registration success title" should be visible
    And the "Registration success text" should be visible
    And the "Registration success continue button" should be visible

    Examples:
      | n | gender | email                  | firstName  | lastName   | password   |
      | a | Female | tesztelek11@female.test | testFemail | testFemail | testFemail |
      | b | Male   | tesztelek11@male.test   | testMale   | testMale   | testMale   |

  Scenario: 2. As a logged in user I should be adble to log out
    Given I am on the "Main" page
    When I click on the "Logout button"
    Then the "Main" page should be displayed
    And the "Header login link" should be visible

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
      | a | abc       | A-Z                    | Z-A                    |
      | b | price     | MostExpensive-Cheapest | Cheapest-MostExpensive |

  Scenario: 6. As a User I should be able to change the number of displayed items
    Given I am on the "Cloth" page
    When I select the "1" option of the "item amount" dropdown
    Then then up to "4" "Product items" should be displayed

    When I select the "2" option of the "item amount" dropdown
    Then then up to "8" "Product items" should be displayed

    When I select the "3" option of the "item amount" dropdown
    Then then up to "12" "Product items" should be displayed

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
    Then the number of "Wishlisted" product in the link should be "More than" "0"

    When I click on the "Wishlist link"
    Then the "Wishlist" page should be displayed
    And the number of "Wishlisted" product on the page should be "More than" "0"
    And the number of "Wishlisted" product in the link should be "More than" "0"

  Scenario: 8. As a user I should be able to add items to the cart
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

  Scenario: 9. As a user I should be able to remove items from the cart
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

    When I click on the "Cart item checkbox"
    And I click on the "Cart item update button"
    Then the number of "Cart" product on the page should be "Exactly" "0"
    And the number of "Cart" product in the link should be "Exactly" "0"


  Scenario: 10. As a user I should be able to checkout
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
    And the "Cart confirmation checkbox" should be visible
    And the "Cart checkout button" should be visible

    When I click on the "Cart confirmation checkbox"
    And I click on the "Cart checkout button"
    Then the "Checkout" page should be displayed
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
    And the "Checkout continue button1" should be visible

    # When I click on the "Checkout continue button"
    #  Then the number of "Checkout warning message" should be "5"
    #  And the "1" of "Warning message" should be "Country is required."
    #  And the "2" of "Warning message" should be "City is required"
    #  And the "3" of "Warning message" should be "Street address is required"
    #  And the "4" of "Warning message" should be "Zip / postal code is required"
    # And the "5" of "Warning message" should be "Phone is required"

    When I fill the "City input" inputfield with "Nevada"
    And I fill the "Address 1 input" inputfield with "123456"
    And I fill the "Zip input" inputfield with "123456"
    And I fill the "Phone input" inputfield with "123456"
    And I fill the "Address 2 input" inputfield with "123456"
    And I select the "2" option of the "Country dropdown" dropdown
    #Then the number of "Checkout warning message" should be "1"
    And I click on the "Checkout continue button1"
    #And the "1" of "Warning message" should be "Country is required."
    #When I select the "1" option of the "Country dropdown" dropdown
    #And I click on the "Checkout continue button"
    Then the "Back button1" should be visible
    And the "Checkout continue button2" should be visible

    When I click on the "Checkout continue button2"
    Then the "Shipping address" should be visible
    And the "Checkout pickup in store checkbox" should be visible
    And the "Back button1" should be visible
    And the "Checkout continue button3" should be visible

    When I click on the "Checkout continue button3"
    Then the "Shipping methods" should be visible
    And the "Back button2" should be visible
    And the "Checkout continue button4" should be visible

    When I click on the "Checkout continue button4"
    Then the "Payment method" should be visible
    And the "Back button2" should be visible
    And the "Checkout continue button5" should be visible

    When I click on the "Checkout continue button5"
    Then the "Paymentinfo" should be visible
    And the "Back button3" should be visible
    And the "Checkout continue button6" should be visible

    When I click on the "Checkout continue button6"
    Then the "Order data" should be visible
    And the "Billing info" should be visible
    And the "Shipping info" should be visible
    And the "Bought products" should be visible
    And the "Final payment amount" should be visible
    And the "Back button4" should be visible
    And the "Checkout continue button6" should be visible

    When I click on the "Checkout continue button6"
    Then the "CheckOutSuccess" page should be displayed
    And the "Checkout completed title" should be visible
    And the "Checkout completed confirmation" should be visible
    And the "Checkout completed order number" should be visible
    And the "Checkout completed order details" should be visible
    And the "Checkout completed continue buton" should be visible
