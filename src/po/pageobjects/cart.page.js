const { $ } = require('@wdio/globals')
const Page = require('./page');

class CartPage extends Page{
    get pageURL() {
        return "https://demowebshop.tricentis.com/cart";
    };
    get listItems(){
        return $('tbody tr.cart-item-row');
    }
    get title(){
        return $('div.page-title');
    }
    get checkbox(){
        return $('tr.cart-item-row input[type=\"checkbox\"]');
    }
    get buttonUpdate(){
        return $('div.common-buttons .update-cart-button');
    }
    get checkboxConfirm(){
        return $('div.terms-of-service input#termsofservice');
    }
    get buttonCheckOut(){
        return $('button#checkout');
    }
    async numberOfProducts(){
        const itemNumber = await $$('tbody tr.cart-item-row');
        return itemNumber;
    }
}

module.exports = new CartPage();