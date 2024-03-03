const { $ } = require('@wdio/globals')
const Page = require('./page');

class WishlistPage extends Page{
    get pageUrl(){
        return "https://demowebshop.tricentis.com/wishlist";
    };
    get listItems(){
        return $('tbody tr.cart-item-row');
    }
    get title(){
        return $('div.page-title');
    }
    async numberOfProducts(){
        const itemNumber = await $$('tbody tr.cart-item-row');
        return itemNumber;
    }
}

module.exports = new WishlistPage();