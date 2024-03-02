const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckoutPage extends Page{
    get pageURL() {
        return "https://demowebshop.tricentis.com/onepagecheckout";
    };
}

module.exports = new CheckoutPage();