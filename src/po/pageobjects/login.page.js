const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    get pageURL() {
        return "https://demowebshop.tricentis.com/login";
    };
    get welcomeMessage() {
        return $('div.page-title');
    };
    get fieldNewCustomer() {
        return $('div.register-block');
    };
    get fieldReturningCustomer() {
        return $('div.returning-wrapper');
    };
    get textEmail() {
        return $('label[for=Email]');
    };
    get inputEmail() {
        return $('#Email');
    };
    get textPassword() {
        return $('label[for=Password');
    };
    get inputPassword() {
        return $('#Password');
    };
    get checkboxRememeberMe() {
        return $('#RememberMe');
    };
    get textRememeberMe() {
        return $('label[for=RememberMe]');
    };
    get forgotPassword() {
        return $('a[href=\"/passwordrecovery\"]');
    };
    get buttonLogin() {
        return $('input.login-button');
    };
    /**
     * define selectors using getter methods

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }


     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
