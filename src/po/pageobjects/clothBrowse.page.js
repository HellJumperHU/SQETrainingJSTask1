const { $ } = require('@wdio/globals')
const Page = require('./page');

class ClothBrowsePage extends Page{
    get pageURL() {
        return "https://demowebshop.tricentis.com/apparel-shoes";
    };

    open () {
        return super.open('apparel-shoes');
    }
}

module.exports = new ClothBrowsePage();