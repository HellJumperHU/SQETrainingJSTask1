const { Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../po/pageobjects/login.page');
const CartPage = require('../po/pageobjects/cart.page');
const CheckoutPage = require('../po/pageobjects/checkout.page');
const ClothBrowsePage = require('../po/pageobjects/clothBrowse.page');
const MainPage = require('../po/pageobjects/main.page');
const RegistrationPage = require('../po/pageobjects/registration.page');
const RregistrationSuccessPage = require('../po/pageobjects/registrationSuccess.page');
const HeaderElement = require('../po/common/header.common');
const ProductCategories = require('../po/common/productCategories.common');
const DesktopBrowsePage = require('../po/pageobjects/desktopBrowse.page');
const ProductCommon = require('../po/common/product.common');
const ComputerBrowsePage = require('../po/pageobjects/computerBrowse.page');
const ProductDetailPage = require('../po/common/productDetail.common');

const pages = {
    Login: LoginPage,
    Main: MainPage,
    Computers: ComputerBrowsePage,
    Desktop: DesktopBrowsePage
}

Then("the {string} page should be displayed", async (page) => {
    switch (page) {
        case "Product detail":
            return ProductDetailPage.isCorrectProductOpened();
        default:
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
        default:
            throw Error("No such visibility check");
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
    }
});

Then("the {string} sub-element of {string} should be {string}", async (nthElement, element, text) => {
    switch (element) {
        case "Computers category":
            computerBrowsePage.childTextComparison(nthElement, text);
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
            ProductCommon.visibleProductAmount(amount);
    }
})