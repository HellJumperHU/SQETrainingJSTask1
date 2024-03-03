const { Given, When, Then, And } = require('@wdio/cucumber-framework');
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
const ProductCategories = require('../po/common/productCategories.common')
const DesktopBrowsePage = require('../po/pageobjects/desktopBrowse.page');

const pages = {
    Main: MainPage,
    Desktop: DesktopBrowsePage,
    Computers: ComputerBrowsePage
}

Given('I am on the {string} page', async (page) => {
    await pages[page].open()
});