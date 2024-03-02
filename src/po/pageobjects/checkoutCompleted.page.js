const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckoutPage extends Page{
    get pageURL() {
        return "https://demowebshop.tricentis.com/checkout/completed/";
    };
    get title(){
        return $('div.checkout-page h1');
    };
    get textConfirmation(){
        return $('div.checkout-data div.title strong');
    };
    get textOrcerNumber(){
        return $('ul.details li:nth-child(1)');
    };
    get linkOrderDetails(){
        return $('ul.details li:nth-child(2)');
    };
    get buttonContinue(){
        return $('input.order-completed-continue-button');
    };


}

module.exports = new CheckoutPage();