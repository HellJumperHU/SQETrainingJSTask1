const { $ } = require('@wdio/globals');
const productCategoriesCommon = require('./productCategories.common');

class Products {
    productName01 = null;
    productName02 = null;

    get productName01() {
        return this.productName01
    };
    get productName02() {
        return this.productName02
    };/*
        set setProductName01(value) {
            this.#productName01 = value;
        };
        set setProductName02(value) {
            this.#productName02 = value;
        };
    */
    get allProduct() {
        return $$('div.product-grid div.item-box');
    }
    get allProductNames(){
        return $$('div.product-grid div.item-box h2 a');
    }
    get dropdownSort() {
        return $('#products-orderby');
    };
    get dropdownProductNumber() {
        return $('#products-pagesize');
    };
    get dropdownViewMode() {
        return $('#products-viewmode');
    };
    get textSort() {
        return $('div.product-sorting span');
    };
    get textBeforeProductNumber() {
        return $('div.product-page-size span:nth-child(1)');
    };
    get textAfterProductNumber() {
        return $('div.product-page-size span:nth-child(3)');
    };
    get textViewMode() {
        return $('div.product-viewmode span');
    };

    // in case of nth=0 the ProductName01 get value other case the ProductName02
    async saveValue(nthElement, nth) {
        const tmpelement = await $('div.product-grid div.item-box:nth-child(' + nthElement + ') h2 a');
        const tmpText = await tmpelement.getText();
        if (nth == "1") {
            this.productName02 = tmpText;
        }
        else {
            this.productName01 = tmpText;
        }
    };

    async changeSort(text) {
        let elementToClick;
        switch (text) {
            case "A-Z":
                elementToClick = await $('#products-orderby option:nth-child(2)');
                break;
            case "Z-A":
                elementToClick = await $('#products-orderby option:nth-child(3)');
                break;
            case "Cheapest-MostExpensive":
                elementToClick = await $('#products-orderby option:nth-child(4)');
                break;
            case "MostExpensive-Cheapest":
                elementToClick = await $('#products-orderby option:nth-child(5)');
                break;
        }
        await this.dropdownSort.click();
        await elementToClick.click();
        await browser.pause(1000);
    }
    /*
    async changeAmountOfVisibleItems(amount) {
            const subnodes = $$('#products-pagesize option')
            subnodes.forEach((option), async() => {
                const text= await option.getText();
                await option.click();
                const amountOfDisplayedProduct = await $$('div.product-grid div.item-box');
                expect(amountOfDisplayedProduct.length).toEqual(text);
            })
        }
    */
    async changeAmountOfVisibleItems(element) {
        const subnode = $('#products-pagesize option:nth-child('+element+')');
        const text = await subnode.getText();
        await subnode.click();
    }
    async visibleProductAmount(amount){
        const amountOfDisplayedProduct = await $$('div.product-grid div.item-box');
        expect(amountOfDisplayedProduct.length).toBeLessThanOrEqual(parseInt(amount,10));
    }

}
module.exports = new Products();