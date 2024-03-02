const { Then } = require('@wdio/cucumber-framework');
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
const ProductCategories = require('../po/common/productCategories.common');
const computerBrowsePage = require('../po/pageobjects/computerBrowse.page');

const pages = {
    Login: LoginPage,
    Main: MainPage,
    Computers: ComputerBrowsePage
}

Then("the {string} page should be displayed", async (page) => {
    return await expect(await browser.getUrl()).toEqual(pages[page].pageURL);
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
        default:
            throw Error("No such visibility check");
    }
});

/*
Then("the {string} element should be expanded", async (node) => {
    let subnodes = ProductCategories.sideMenuComputersChilds.childNodes;

});
*/

Then("the {string} element should have {string} sub-elements", async (element, childNumber) => {
    switch (element) {
        case "Computers list":
            /*
            Loop did not work at all as expected.
            Tried many-many ways for 4-5 hours but all I got are
            errors,
            .isDisplayed() / .isExist() / isETC.... is not a function,
            promise {pending} (if console logged),
            regardless of the "await", the comparison requested had not been waited and the program just jumped to the next step.
            Even if I hardcoded the check for each elements, I still see only 4 "promise <pending>" messages So I kept the loop due it looks better than being hardcoded
            */
            for (let i = 1; i <= childNumber; i++) {
                const tmpElement = await $('div.block-category-navigation ul.list li ul li:nth-child(' + i + ') a');
                if (!expect(tmpElement).toExist()) {
                    return false;
                }
            };
            const tmpElement = await $('div.block-category-navigation ul.list li ul li:nth-child(' + childNumber + 1 + ')');
            return !expect(tmpElement).toExist("no such element");
    }
});

Then("the {string} sub-element of {string} should be {string}", async (nthElement, element, text) => {
    switch (element) {
        case "Computers category":
            computerBrowsePage.childTextComparison(nthElement,text);
    }
});

Then(/^the (\w+) sub-element should be (\w+)$/, async () => {
});
