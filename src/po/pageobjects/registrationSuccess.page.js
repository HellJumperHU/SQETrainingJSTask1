const { $ } = require('@wdio/globals')
const Page = require('./page');

class RegistrationSuccessPage extends Page{
    get pageUrl(){
        return "https://demowebshop.tricentis.com/registerresult/1";
    };
    get registrationSuccessTitle(){
        return $('div.page-title');
    };
    get registrationSuccesText(){
        return $('div.page-body');
    };
    get registrationContinueButton(){
        return $('input.register-continue-button');
    };
}

module.exports = new RegistrationSuccessPage();