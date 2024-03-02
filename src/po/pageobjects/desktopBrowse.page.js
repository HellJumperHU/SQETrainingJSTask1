const { $ } = require('@wdio/globals')
const Page = require('./page');

class ComputerBrowsePage extends Page{
    nthItem1=null;
    nthItem2 =null;
    get pageURL() {
        return "https://demowebshop.tricentis.com/computers";
    };
    open () {
        return super.open('computers');
    }
}

module.exports = new ComputerBrowsePage();