const { $ } = require('@wdio/globals')
const Page = require('./page');

class ComputerBrowsePage extends Page{
    get pageURL() {
        return "https://demowebshop.tricentis.com/computers";
    };
    get listProductList(){
        return $('div.sub-category-grid')
    };
    get title(){
        return $('div.page-title');
    };
    async childTextComparison(nth,text){
        const tmpElement = await $('div.block-category-navigation ul.list li ul li:nth-child(' + nth + ') a');
        let elementText = await tmpElement.getText();
        return expect(elementText).toEqual(text);
    };
    open () {
        return super.open('computers');
    }
}

module.exports = new ComputerBrowsePage();