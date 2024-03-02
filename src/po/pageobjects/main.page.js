const { $ } = require('@wdio/globals')
const Page = require('./page');

class MainPage extends Page{
    get pageURL() {
        return "https://demowebshop.tricentis.com/";
    };
    open() {
        return super.open();
    };
}

module.exports = new MainPage();