const { $ } = require('@wdio/globals')
const Page = require('./page');

class DesktopBrowsePage extends Page{
    get pageURL() {
        return "https://demowebshop.tricentis.com/desktops";
    };
    open () {
        return super.open('desktops');
    }
}

module.exports = new DesktopBrowsePage();