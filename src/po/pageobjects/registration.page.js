const { $ } = require('@wdio/globals')
const Page = require('./page');

class RegistrationPage extends Page {
    get pageURL() {
        return "https://demowebshop.tricentis.com/register";
    };
    get title() {
        return $('div.page-title');
    };
    get titlePersonalDetail() {
        return $('div.page-body div:nth-child(2) div strong');
    };
    get textGender() {
        return $('');
    };
    get textGenderMale() {
        return $('label[for=\"gender-male\"]');
    };
    get radioButtonGenderMale() {
        return $('#gender-male');
    };
    get textGenderFemale() {
        return $('label[for=gender-female]');
    };
    get radioButtonGenderFemale() {
        return $('#gender-female');
    };
    get textFirstName() {
        return $('label[for=\"FirstName\"]');
    };
    get inputFirstName() {
        return $('#FirstName');
    };
    get textLastName() {
        return $('label[for=\"LastName\"]');
    };
    get inputLastName() {
        return $('#LastName');
    };
    get textPassword() {
        return $('label[for=\"Password\"]');
    };
    get inputPassword() {
        return $('#Password');
    };
    get textConfirmPassword() {
        return $('label[for=\"ConfirmPassword\"]');
    };
    get inputConfirmPassword() {
        return $('#ConfirmPassword');
    };
    get titleYourPassword() {
        return $('div.page-body div:nth-child(3) div strong');
    };
    get buttonRegister() {
        return $('#register-button');
    };
    get passwordSection() {
        return $('div.page-body div:nth-child(2) div strong')
    };
    get textEmail(){
        return $('label[for=\"Email\"]');
    };
    get inputEmail(){
        return $('#Email');
    };
    open() {
        return super.open('register');
    };
}

module.exports = new RegistrationPage();