const { $ } = require('@wdio/globals');

class HeaderElement {
    get headerElememt() {
        return $('header-links')
    };
    get headerRegister() {
        return $('div.header-links li:nth-child(1) a[href=\"/register\"]')
    };
    get headerLogin() {
        return $('div.header-links li:nth-child(2) a[href=\"/login\"]')
    };
    get headerShoppingCart() {
        return $('div.header-links li:nth-child(3) a')
    };
    get headerWishlist() {
        return $('div.header-links li:nth-child(4) a')
    };
    get headerLoggedInUserName() {
        return $('div.header-links li:nth-child(1) a[href=\"/customer/info\"]')
    };
    get headerLogOut() {
        return $('div.header-links li:nth-child(2) a[href=\"/logout\"]')
    };

    async indicatorNumberOf(category) {
        let tmpURL;
        switch (category) {
            case "Cart":
                tmpURL = await this.headerWishlist.getText();;
            case "Wishlist":
                tmpURL = await this.headerWishlist.getText();
            default:
                throw Error("No such visibility check");
        }
    }
}

module.exports = new HeaderElement();