const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckOutPage extends Page {
    get pageURL() {
        return "https://demowebshop.tricentis.com/onepagecheckout";
    };
    get labelFirstName() {
        return $('[for=BillingNewAddress_FirstName]');
    }
    get labelLastName() {
        return $('[for=BillingNewAddress_LastName]');
    }
    get labelEmail() {
        return $('[for=BillingNewAddress_Email]');
    }
    get labelCompany() {
        return $('[for=BillingNewAddress_Company]');
    }
    get labelCountryDropdown() {
        return $('[for=BillingNewAddress_CountryId]');
    }
    get labelStateDropdown() {
        return $('[for=BillingNewAddress_StateProvinceId]');
    }
    get labelCity() {
        return $('[for=BillingNewAddress_City]');
    }
    get labelAddress1() {
        return $('[for=BillingNewAddress_Address1]');
    }
    get labelAddress2() {
        return $('[for=BillingNewAddress_Address2]');
    }
    get labelZip() {
        return $('[for=BillingNewAddress_ZipPostalCode]');
    }
    get labelPhoneNumber() {
        return $('[for=BillingNewAddress_PhoneNumber]');
    }
    get labelFax() {
        return $('[for=BillingNewAddress_FaxNumber]');
    }
    get InputFirstName() {
        return $('#BillingNewAddress_FirstName');
    }
    get InputLastName() {
        return $('#BillingNewAddress_LastName');
    }
    get InputEmail() {
        return $('#BillingNewAddress_Email');
    }
    get InputCompany() {
        return $('#BillingNewAddress_Company');
    }
    get DropdownCountry() {
        return $('#BillingNewAddress_CountryId');
    }
    get DropdownState() {
        return $('BillingNewAddress_StateProvinceId');
    }
    get InputCity() {
        return $('#BillingNewAddress_City');
    }
    get InputAddr1() {
        return $('#BillingNewAddress_Address1');
    }
    get InputAddr2() {
        return $('#BillingNewAddress_Address2');
    } get InputZip() {
        return $('#BillingNewAddress_ZipPostalCode');
    } get InputPhone() {
        return $('#BillingNewAddress_PhoneNumber');
    } get InputFax() {
        return $('#BillingNewAddress_FaxNumber');
    }
    get buttonContinue1() {
        return $('#billing-buttons-container input.new-address-next-step-button');
    }
    get buttonContinue2() {
        return $('#shipping-buttons-container input.new-address-next-step-button');
    }
    get buttonContinue3() {
        return $('#co-shipping-method-form input.shipping-method-next-step-button');
    }
    get buttonContinue4() {
        return $('#payment-method-buttons-container input.payment-method-next-step-button');
    }
    get buttonContinue5() {
        return $('#payment-info-buttons-container input.payment-info-next-step-button');
    }
    get buttonContinue6() {
        return $('input.confirm-order-next-step-button');
    }

    get buttonBack1() {
        return $('#shipping-buttons-container p.back-link a[href="#"]');
    }
    get buttonBack2() {
        return $('#payment-method-buttons-container p.back-link a[href="#"]');
    }
    get buttonBack3() {
        return $('#payment-info-buttons-container p.back-link a[href="#"]');
    }
    get buttonBack4() {
        return $('#confirm-order-buttons-container p.back-link a[href="#"]');
    }
    get linkBack() {
        return $('#shipping-buttons-container a[href="#"]');
    }
    get dropdownShippingAddress() {
        return $('div #shipping-address-select');
    }
    get checkboxPickUpInStore() {
        return $('div.pickup-in-store');
    }
    get radioShippingMethod() {
        return $('#checkout-shipping-method-load');
    }
    get radioPaymentMethod() {
        return $('#checkout-payment-method-load');
    }
    get messagePaymentInfo() {
        return $('div.info');
    }
    get orderData() {
        return $('div.order-review-data');
    }
    get textBilliongInfo() {
        return $('ul.billing-info');
    }
    get textShippingInfo() {
        return $('ul.shipping-info');
    }
    get boughtProduct() {
        return $('table.cart');
    }
    get valueToBePaid() {
        return $('div.total-info');
    }
    get savedBillingAddressDropdown() {
        return $('div #billing-address-select');
    }

    /*get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }


    */

    async requredAmountCheck(amount) {
        const numberOfRequiredFields = await $$('div.enter-address-body .required')
        return await expect(numberOfRequiredFields.length).toEqual(amount);
    }
    async warningAmountCheck(amount) {
        browser.pause(3000);
        const numberOfRequiredFields = await $$('div.enter-address-body .field-validation-error')
        return await expect(numberOfRequiredFields.length).toEqual(amount);
    }
    async warningMessageTextCheck(nth, text) {
        const tmpElement = await $('div.enter-address-body .field-validation-error:tnh-child(' + nth + ')');
        const tmpText = await tmpElement.getText();
        return await expect(tmpText).toEqual(text);
    }
    async selectCountry(nth) {
        const subnode = $('#BillingNewAddress_CountryId option:nth-child(' + nth + ')');
        await subnode.click();
    }
    async switchToInputFieldIfNecessary() {
        const tmpIsVisible = await this.savedBillingAddressDropdown.isDisplayed();
        if (tmpIsVisible){
            (await this.savedBillingAddressDropdown).click();
            const tmp2= await $$('div #billing-address-select option');
            await tmp2[tmp2.length-1].click();
        }

    }
}

module.exports = new CheckOutPage();