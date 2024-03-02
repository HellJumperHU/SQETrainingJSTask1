const { $ } = require('@wdio/globals')
const Page = require('./page');

class CartPage extends Page{
    get pageURL() {
        return "https://demowebshop.tricentis.com/cart";
    };
}

module.exports = new CartPage();