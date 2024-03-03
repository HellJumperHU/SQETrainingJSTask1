const { $ } = require('@wdio/globals')
const Page = require('../pageobjects/page');

const ProductCommonPage = require('./product.common')

class ProductDetailPage extends Page {
    savedProductName = null;
    get productContainer() {
        return $('div.product-details-page');
    };
    get productImage() {
        return $('div.gallery div.picture');
    };
    get productOverviewContainer() {
        return $('div.product-details-page div.overview');
    };
    get productName() {
        return $('div.product-details-page div.overview div.product-name');
    };
    get productStockInformation() {
        return $('div.stock');
    };
    get productAttributes() {
        return $('div.product-details-page div.overview div.attributes');
    };
    get productPriceOfIt() {
        return $('div.product-price');
    };
    get productAddToCart() {
        return $('div.add-to-cart');
    };
    get productAddToWishlist() {
        return $('input.add-to-wishlist-button');
    };

    async isCorrectProductOpened() {
        const currentURL = await browser.getUrl();
        const splittedUrl = currentURL.split('/');
        const lastPartOfURL = splittedUrl[splittedUrl.length - 1];
        const item = await $('div.product-name h1')
        const itemName = await item.getText();
        let tmp = "";
        for (let i = 0; i < itemName.length; i++)
            if (itemName[i].match(/[a-z]|[0-9]/i)) {
                tmp = tmp.concat(itemName[i].toLowerCase());
            }
            else if (itemName[i] == ' ') {
                tmp = tmp.concat('-');
            }
        return expect(tmp).toEqual(lastPartOfURL);
    }

    async openProductDetail(nth) {
        const tmpNth = nth - 1;
        if (!ProductCommonPage.allProductNames[tmpNth].isDisplayed())
            return false;
        const clickedProductName = await ProductCommonPage.allProductNames[tmpNth].getText();
        this.tmpProductName = clickedProductName;
        await ProductCommonPage.allProduct[tmpNth].click();
    }
}

module.exports = new ProductDetailPage();