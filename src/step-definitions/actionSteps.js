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

const pages = {
    login: LoginPage
}

When('I click on the {string}', async (clickedEelement) => {
    switch (clickedEelement) {
        case "Login link":
            return await HeaderElement.headerLogin.click();
        case "Login button":
            return (await LoginPage.buttonLogin).click();
        case "Logout button":
            return (await HeaderElement.headerLogOut).click();
        case "Computers category":
            return ((await ProductCategory.sideMenuComputers)).click();
        default:
            throw Error("No such action step for click");
    };
});
When('I fill the {string} inputfield with {string}', async (string1, string2) => {
    switch (string1) {
        case "Email":
            await LoginPage.inputEmail.setValue(string2);
            break;
        case "Password":
            await LoginPage.inputPassword.setValue(string2);
    }
});

When("the {string} item name is saved as {string}", async (nthElement, nth) => {
    await ProductCommon.saveValue(nthElement, nth);
})

When("the sorting is changed to {string}", async (sorting) => {
    await ProductCommon.changeSort(sorting);
})