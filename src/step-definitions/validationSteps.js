const { Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../po/pageobjects/login.page');
const CartPage = require('../po/pageobjects/cart.page');
const CheckOutPage = require('../po/pageobjects/checkout.page');
const ClothBrowsePage = require('../po/pageobjects/clothBrowse.page');
const MainPage = require('../po/pageobjects/main.page');
const RegistrationPage = require('../po/pageobjects/registration.page');
const RegistrationSuccessPage = require('../po/pageobjects/registrationSuccess.page');
const HeaderElement = require('../po/common/header.common');
const ProductCategories = require('../po/common/productCategories.common');
const DesktopBrowsePage = require('../po/pageobjects/desktopBrowse.page');
const ProductCommon = require('../po/common/product.common');
const ComputerBrowsePage = require('../po/pageobjects/computerBrowse.page');
const ProductDetailPage = require('../po/common/productDetail.common');
const WishlistPage = require('../po/pageobjects/wishlist.page');
const headerCommon = require('../po/common/header.common');
const CheckOutSuccess = require('../po/pageobjects/checkoutCompleted.page');

const pages = {
    Login: LoginPage,
    Main: MainPage,
    Computers: ComputerBrowsePage,
    Desktop: DesktopBrowsePage,
    Wishlist: WishlistPage,
    Cart: CartPage,
    Checkout: CheckOutPage,
    CheckOutSuccess: CheckOutSuccess,
    Registration: RegistrationPage,
    RegistrationSuccess: RegistrationSuccessPage
}

Then("the {string} page should be displayed", async (page) => {
    switch (page) {
        case "Product detail":
            return ProductDetailPage.isCorrectProductOpened();
        default:
            await browser.pause(2000);
            return await expect(await browser.getUrl()).toEqual(pages[page].pageURL);
    }
});

Then("the {string} should be visible", async (element) => {
    switch (element) {
        case "Welcome message":
            return expect(LoginPage.welcomeMessage).toBeDisplayed();
        case "Returning customer field":
            return expect(LoginPage.fieldReturningCustomer).toBeDisplayed();
        case "New customer field":
            return expect(LoginPage.fieldNewCustomer).toBeDisplayed();
        case "Email text":
            return expect(LoginPage.textEmail).toBeDisplayed();
        case "Email inputfield":
            return expect(LoginPage.inputEmail).toBeDisplayed();
        case "Password text":
            return expect(LoginPage.textPassword).toBeDisplayed();
        case "Password inputfield":
            return expect(LoginPage.inputPassword).toBeDisplayed();
        case "Remember me checkbox":
            return expect(LoginPage.checkboxRememeberMe).toBeDisplayed();
        case "Remember me text":
            return expect(LoginPage.textRememeberMe).toBeDisplayed();
        case "Forgot password":
            return expect(LoginPage.forgotPassword).toBeDisplayed();
        case "Login button":
            return expect(LoginPage.buttonLogin).toBeDisplayed();
        case "Username link":
            return expect(HeaderElement.headerLoggedInUserName).toBeDisplayed();
        case "Logout link":
            return expect(HeaderElement.headerLogOut).toBeDisplayed();
        case "Header login link":
            return expect(HeaderElement.headerLogin).toBeDisplayed();
        case "Computers title":
            return expect(ComputerBrowsePage.title).toBeDisplayed();
        case "Product container":
            return expect(ProductDetailPage.productContainer).toBeDisplayed();
        case "Product Image":
            return expect(ProductDetailPage.productImage).toBeDisplayed();
        case "Product overview container":
            return expect(ProductDetailPage.productOverviewContainer).toBeDisplayed();
        case "Product name":
            return expect(ProductDetailPage.productName).toBeDisplayed();
        case "Product stock":
            return expect(ProductDetailPage.productStockInformation).toBeDisplayed();
        case "Product attributes":
            return expect(ProductDetailPage.productAttributes).toBeDisplayed();
        case "Product price":
            return expect(ProductDetailPage.productPriceOfIt).toBeDisplayed();
        case "Add to cart button":
            return expect(ProductDetailPage.productAddToCart).toBeDisplayed();
        case "Wishlist button":
            return expect(ProductDetailPage.productAddToWishlist).toBeDisplayed();
        case "Cart item checkbox":
            return expect(CartPage.checkbox).toBeDisplayed();
        case "Cart item update button":
            return expect(CartPage.buttonUpdate).toBeDisplayed();
        case "First name label":
            await CheckOutPage.switchToInputFieldIfNecessary();
            return expect(CheckOutPage.labelFirstName).toBeDisplayed();
        case "Last name label":
            return expect(CheckOutPage.labelLastName).toBeDisplayed();
        case "Email label":
            return expect(CheckOutPage.labelEmail).toBeDisplayed();
        case "Company label":
            return expect(CheckOutPage.labelCompany).toBeDisplayed();
        case "Country dropdown label":
            return expect(CheckOutPage.labelCountryDropdown).toBeDisplayed();
        case "State dropdown":
            return expect(CheckOutPage.labelStateDropdown).toBeDisplayed();
        case "City label":
            return expect(CheckOutPage.labelCity).toBeDisplayed();
        case "Address 1 label":
            return expect(CheckOutPage.labelAddress1).toBeDisplayed();
        case "Address 2 label":
            return expect(CheckOutPage.labelAddress2).toBeDisplayed();
        case "Zip label":
            return expect(CheckOutPage.labelZip).toBeDisplayed();
        case "Phone number label":
            return expect(CheckOutPage.labelPhoneNumber).toBeDisplayed();
        case "Fax label":
            return expect(CheckOutPage.labelFax).toBeDisplayed();
        case "First name input":
            return expect(CheckOutPage.InputFirstName).toBeDisplayed();
        case "Last name input":
            return expect(CheckOutPage.InputLastName).toBeDisplayed();
        case "Email input":
            return expect(CheckOutPage.InputEmail).toBeDisplayed();
        case "Company input":
            return expect(CheckOutPage.InputCompany).toBeDisplayed();
        case "Country dropdown":
            return expect(CheckOutPage.DropdownCountry).toBeDisplayed();
        case "State dropdown":
            return expect(CheckOutPage.DropdownState).toBeDisplayed();
        case "City input":
            return expect(CheckOutPage.InputCity).toBeDisplayed();
        case "Address 1 input":
            return expect(CheckOutPage.InputAddr1).toBeDisplayed();
        case "Address 2 input":
            return expect(CheckOutPage.InputAddr2).toBeDisplayed();
        case "Zip input":
            return expect(CheckOutPage.InputZip).toBeDisplayed();
        case "Phone number input":
            return expect(CheckOutPage.InputPhone).toBeDisplayed();
        case "Fax input":
            return expect(CheckOutPage.InputFax).toBeDisplayed();
        case "Checkout continue button1":
            return expect(CheckOutPage.buttonContinue1).toBeDisplayed();
        case "Cart confirmation checkbox":
            return expect(CartPage.checkboxConfirm).toBeDisplayed();
        case "Cart checkout button":
            return expect(CartPage.checkbox).toBeDisplayed();
        case "Back button1":
            return expect(CheckOutPage.buttonBack1).toBeDisplayed();
        case "Back button2":
            return expect(CheckOutPage.buttonBack2).toBeDisplayed();
        case "Back button3":
            return expect(CheckOutPage.buttonBack3).toBeDisplayed();
        case "Back button4":
            return expect(CheckOutPage.buttonBack4).toBeDisplayed();
        case "Checkout continue button2":
            return expect(CheckOutPage.buttonContinue2).toBeDisplayed();
        case "Checkout continue button3":
            return expect(CheckOutPage.buttonContinue3).toBeDisplayed();
        case "Checkout continue button4":
            return expect(CheckOutPage.buttonContinue4).toBeDisplayed();
        case "Checkout continue button5":
            return expect(CheckOutPage.buttonContinue5).toBeDisplayed();
        case "Checkout continue button6":
            return expect(CheckOutPage.buttonContinue6).toBeDisplayed();
        case "Shipping address":
            return expect(CheckOutPage.dropdownShippingAddress).toBeDisplayed();
        case "Checkout pickup in store checkbox":
            return expect(CheckOutPage.checkboxPickUpInStore).toBeDisplayed();
        case "Shipping methods":
            return expect(CheckOutPage.radioShippingMethod).toBeDisplayed();
        case "Payment method":
            return expect(CheckOutPage.radioPaymentMethod).toBeDisplayed();
        case "Paymentinfo":
            return expect(CheckOutPage.messagePaymentInfo).toBeDisplayed();
        case "Order data":
            return expect(CheckOutPage.orderData).toBeDisplayed();
        case "Billing info":
            return expect(CheckOutPage.textBilliongInfo).toBeDisplayed();
        case "Shipping info":
            return expect(CheckOutPage.textShippingInfo).toBeDisplayed();
        case "Bought products":
            return expect(CheckOutPage.boughtProduct).toBeDisplayed();
        case "Final payment amount":
            return expect(CheckOutPage.valueToBePaid).toBeDisplayed();
        case "Checkout completed title":
            return expect(CheckOutSuccess.title).toBeDisplayed();
        case "Checkout completed confirmation":
            return expect(CheckOutSuccess.textConfirmation).toBeDisplayed();
        case "Checkout completed order number":
            return expect(CheckOutSuccess.textOrderNumber).toBeDisplayed();
        case "Checkout completed order details":
            return expect(CheckOutSuccess.linkOrderDetails).toBeDisplayed();
        case "Checkout completed continue buton":
            return expect(CheckOutSuccess.buttonContinue).toBeDisplayed();

        case "Female radio button":
            return expect(RegistrationPage.radioButtonGenderFemale).toBeDisplayed();
        case "Male radio button":
            return expect(RegistrationPage.radioButtonGenderMale).toBeDisplayed();
        case "Register first name label":
            return expect(RegistrationPage.textFirstName).toBeDisplayed();
        case "Register last name label":
            return expect(RegistrationPage.textLastName).toBeDisplayed();
        case "Register email label":
            return expect(RegistrationPage.textEmail).toBeDisplayed();
        case "Register first name input":
            return expect(RegistrationPage.inputFirstName).toBeDisplayed();
        case "Register last name input":
            return expect(RegistrationPage.inputLastName).toBeDisplayed();
        case "Register email input":
            return expect(RegistrationPage.inputEmail).toBeDisplayed();
        case "Registration button":
            return expect(RegistrationPage.buttonRegister).toBeDisplayed();
        case "Register first name input":
            return expect(RegistrationPage.pas).toBeDisplayed();
        case "Register password1":
            return expect(RegistrationPage.inputPassword).toBeDisplayed();
        case "Register password2":
            return expect(RegistrationPage.inputConfirmPassword).toBeDisplayed();
        case "Registration success title":
            return expect(RegistrationSuccessPage.registrationSuccessTitle).toBeDisplayed();
        case "Registration success text":
            return expect(RegistrationSuccessPage.registrationSuccesText).toBeDisplayed();
        case "Registration success continue button":
            return expect(RegistrationSuccessPage.registrationContinueButton).toBeDisplayed();
        default:
            throw Error("No such visibility check exist");
    }
});

Then("the {string} element should have {string} sub-elements", async (element, childNumber) => {
    switch (element) {
        case "Computers list":
            for (let i = 1; i <= childNumber; i++) {
                const tmpElement = await $('div.block-category-navigation ul.list li ul li:nth-child(' + i + ') a');
                if (!expect(tmpElement).toExist()) {
                    return false;
                }
            };
            const tmpElement = await $('div.block-category-navigation ul.list li ul li:nth-child(' + childNumber + 1 + ')');
            return !expect(tmpElement).toExist("no such element");
        default:
            throw Error("No such item type found for validate its childnode multiplicity");
    }
});

Then("the {string} sub-element of {string} should be {string}", async (nthElement, element, text) => {
    switch (element) {
        case "Computers category":
            ComputerBrowsePage.childTextComparison(nthElement, text);
            break;
        default:
            throw Error("No such item type found for validate its sub-node value");
    }
});

Then("the {string} item name should be {string}", async (element, nthElement) => {
    const tmpelement = await $('div.product-grid div.item-box:nth-child(' + element + ') h2 a');
    const tmpText = await tmpelement.getText();
    if (nthElement == "1") {
        return expect(tmpText).toEqual(ProductCommon.productName02);
    }
    else {
        return expect(tmpText).toEqual(ProductCommon.productName01);
    }
});
Then("then up to {string} {string} should be displayed", async (amount, type) => {
    switch (type) {
        case "Product items":
            await ProductCommon.visibleProductAmount(amount);
            break;
        default:
            throw Error("No such item type found for validate how much of it are displayed");
    }
})

Then("the number of {string} product on the page should be {string} {string}", async (itemType, condition,number) => {
    let productAmount;
    switch (itemType) {
        case "Wishlisted":
            productAmount = WishlistPage.numberOfProducts();
            break;
        case "Cart":
            productAmount = CartPage.numberOfProducts();
            break;
        default:
            throw Error("No such item type found for validate its sub-node multiplicity");
    }
    switch (condition) {
        case "More than":
            return expect((await productAmount).length).toBeGreaterThanOrEqual(parseInt(number, 10));
        case "Exactly":
            return expect((await productAmount).length).toEqual(parseInt(number, 10));
        default:
            throw Error("No such condition found for validate the value of the compared items");
    }
})

Then("the number of {string} product in the link should be {string} {string}", async (itemType, condition, number) => {
    let productAmount;
    productAmount = await headerCommon.indicatorNumberOf(itemType);
    switch (condition) {
        case "More than":
            return expect(productAmount).toBeGreaterThanOrEqual(parseInt(number, 10));
        case "Exactly":
            return expect(productAmount).toEqual(parseInt(number, 10));
        default:
            throw Error("No such item type found for validate its multiplicity");
    }
})

Then("the number of {string} should be {string}", async (element, amount) => {
    switch (element) {
        case "Checkout required mark":
            return CheckOutPage.requredAmountCheck(parseInt(amount, 10));
        case "Checkout warning message":
            return CheckOutPage.warningAmountCheck(parseInt(amount, 10));
        default:
            throw Error("No such item type found on Checkputpage for validate its multiplicity");
    }
})

Then("the {string} of {string} should be {string}", async (nth, element, value) => {
    switch (element) {
        case "Warning message":
            return CheckOutPage.warningMessageTextCheck(nth, value);
        default:
            throw Error("No such element found for text comparison");
    }
})
