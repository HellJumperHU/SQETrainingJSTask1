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
    get headerShoppingCartQuantity() {
        return $('span.cart-qty');
    }
    get headerWishlist() {
        return $('div.header-links li:nth-child(4) a')
    };
    get headerWishlistQuantity() {
        return $('span.wishlist-qty')
    }
    get headerLoggedInUserName() {
        return $('div.header-links li:nth-child(1) a[href=\"/customer/info\"]')
    };
    get headerLogOut() {
        return $('div.header-links li:nth-child(2) a[href=\"/logout\"]')
    };

    async indicatorNumberOf(category) {
        let tmpLinkText;
        switch (category) {
            case "Cart":
                tmpLinkText = await this.headerWishlistQuantity.getText();
                break;
            case "Wishlisted":
                tmpLinkText = await this.headerWishlistQuantity.getText();
                break;
            default:
                throw Error("No such visibility check in the HEADER");
        }
        let tmpNumber="";
        console.log(tmpNumber+" <<-- tmpNumber");
        for (let i=1;i<tmpLinkText.length-1;i++){

            tmpNumber=tmpNumber.concat(tmpLinkText[i]);
        }
        //tmpLinkText= tmpLinkText.replace(/[0-9]/);
        console.log(tmpNumber+" <<-- tmpNumber after LOOP");
        return parseInt(tmpNumber,10);
        /*
        console.log(tmpLinkText + "<<<<<<---- tmpLinkText");
        let tmpNumber = "";
        for (let i = 0; i < tmpLinkText.length; i++) {
            if (tmpLinkText[i].match(/[0-9]/i)) {
                tmpNumber = tmpNumber.concat(tmpLinkText[i].toLowerCase());
            }
            console.log(tmpNumber);
            const number = parseInt(tmpNumber, 10);
            return number;
            const tmpText1=tmpURL.split('(');
            const tmpText2 = tmpText1.split(')');
            console.log(tmpText2+" <<<--- tmpText");
            return tmpText2[1];
        }*/
    }
}

module.exports = new HeaderElement();