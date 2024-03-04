const { When, And } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../po/pageobjects/login.page');
const CartPage = require('../po/pageobjects/cart.page');
const CheckoutPage = require('../po/pageobjects/checkout.page');
const ClothBrowsePage = require('../po/pageobjects/clothBrowse.page');
const ComputerBrowsePage = require('../po/pageobjects/computerBrowse.page');
const MainPage = require('../po/pageobjects/main.page');
const RegistrationPage = require('../po/pageobjects/registration.page');
const RregistrationSuccessPage = require('../po/pageobjects/registrationSuccess.page');
const HeaderElement = require('../po/common/header.common');
const ProductCategory = require('../po/common/productCategories.common')
const DesktopBrowsePage = require('../po/pageobjects/desktopBrowse.page');
const ProductCommon = require('../po/common/product.common');
const ProductDetailPage = require('../po/common/productDetail.common');
const headerCommon = require('../po/common/header.common');

const pages = {
    login: LoginPage
}

When('I click on the {string}', async (clickedEelement) => {
    switch (clickedEelement) {
        case "Login link":
            return await HeaderElement.headerLogin.click();
        case "Login button":
            return await LoginPage.buttonLogin.click();
        case "Logout button":
            return await HeaderElement.headerLogOut.click();
        case "Computers category":
            return await ProductCategory.sideMenuComputers.click();
        case "Wishlist button":
            return await ProductDetailPage.productAddToWishlist.click();
        case "Wishlist link":
            return await headerCommon.headerWishlist.click();
        case "Add to cart button":
            return await ProductDetailPage.productAddToCart.click();
        case "Cart link":
            return await headerCommon.headerShoppingCart.click();
        case "Cart item checkbox":
            return await CartPage.checkbox.click();
        case "Cart item update button":
            return await CartPage.buttonUpdate.click();
        case "Cart checkout button":
            return await CartPage.buttonCheckOut.click()
        case "Cart confirmation checkbox":
            return await CartPage.checkboxConfirm.click();
        case "Checkout continue button1":
            return await CheckoutPage.buttonContinue1.click()
        case "Back button":
            return await CheckoutPage.buttonBack.click();
        case "Checkout continue button2":
            return await CheckoutPage.buttonContinue2.click()
        case "Checkout continue button3":
            return await CheckoutPage.buttonContinue3.click()
        case "Checkout continue button4":
            return await CheckoutPage.buttonContinue4.click()
        case "Checkout continue button5":
            return await CheckoutPage.buttonContinue5.click()
        case "Checkout continue button6":
            return await CheckoutPage.buttonContinue6.click()
        case "Female radio button":
            return await RegistrationPage.radioButtonGenderFemale.click();
        case "Male radio button":
            return await RegistrationPage.radioButtonGenderMale.click();
        case "Register button":
            return await RegistrationPage.buttonRegister.click();
        default:
            throw Error("No such action step for click");
    };
});
When('I fill the {string} inputfield with {string}', async (inputField, text) => {
    switch (inputField) {
        case "Email":
            await LoginPage.inputEmail.setValue(text);
            break;
        case "Password":
            await LoginPage.inputPassword.setValue(text);
            break;
        case "City input":
            await CheckoutPage.InputCity.setValue(text);
            break;
        case "Address 1 input":
            await CheckoutPage.InputAddr1.setValue(text);
            break;
        case "Zip input":
            await CheckoutPage.InputZip.setValue(text);
            break;
        case "Phone input":
            await CheckoutPage.InputPhone.setValue(text);
            break;
        case "Address 2 input":
            await CheckoutPage.InputAddr2.setValue(text);
            break;
        case "Register first name input":
            await RegistrationPage.inputFirstName.setValue(text);
            break;
        case "Register last name input":
            await RegistrationPage.inputLastName.setValue(text);
            break;
        case "Register email input":
            await RegistrationPage.inputEmail.setValue(text);
            break;
        case "Register password1":
            await RegistrationPage.inputPassword.setValue(text);
            break;
        case "Register password2":
            await RegistrationPage.inputConfirmPassword.setValue(text);
            break;
        default:
            throw Error("No such inputfield found to fill with value");
    }
});

When("the {string} item name is saved as {string}", async (nthElement, nth) => {
    await ProductCommon.saveValue(nthElement, nth);
})

When("the sorting is changed to {string}", async (sorting) => {
    await ProductCommon.changeSort(sorting);
})

When("I select the {string} option of the {string} dropdown", async (nth, itemAmount) => {
    switch (itemAmount) {
        case "item amount":
            await ProductCommon.changeAmountOfVisibleItems(nth);
            break;
        case "Country dropdown":
            await CheckoutPage.selectCountry(nth)
            break;
    }
})

When("I click on the {string} of {string}", async (nth, element) => {
    switch (element) {
        case "Product tile":
            await ProductDetailPage.openProductDetail(nth);
            break;
        default:
            throw Error("No such item type found for click on");
    }
})
