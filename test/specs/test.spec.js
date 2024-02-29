const { URL } = require('url');
const path = require('path')
const fs = require('fs');

// function for checking if the file downloaded during the given time
function f_waitForFileExists(filePath, timeout) {
    return new Promise(function (resolve, reject) {

        var timer = setTimeout(function () {
            watcher.close();
            reject(new Error('File did not exists and was not created during the timeout.'));
        }, timeout);

        fs.access(filePath, fs.constants.R_OK, function (err) {
            if (!err) {
                console.log("access");
                clearTimeout(timer);
                watcher.close();
                resolve();
            }
        });
        console.log("in the file validator");
        var dir = path.dirname(filePath);
        var basename = path.basename(filePath);
        var watcher = fs.watch(dir, function (eventType, filename) {
            if (eventType === 'rename' && filename === basename) {
                clearTimeout(timer);
                watcher.close();
                resolve();
            }
        });
    });
}
// function to check if the SINGLE downloaded file's name and extension are match the given name and extension
// for checking if the file downloaded successfully it is necessary to add the hrefElement (selector) which points to the UI element with URL of the downloaded file
async function f_downloadedFileNameAndExtensionCheck(hrefElement, expectedName, expectedExtension) {
    console.log("Getting the HREF attribute");
    const downloadHref = await hrefElement.getAttribute('href');
    console.log("The HREF attribute is gotten as " + downloadHref);
    console.log("HREF pass to downloadURL variable");
    const downloadUrl = new URL(downloadHref);
    console.log("HREF passed to downloadURL variable as " + downloadUrl);
    console.log("Passing the pathname of downloadUrl to fullPath variable");
    const fullPath = downloadUrl.pathname;
    console.log("The pathname of downloadUrl to fullPath variable is passed as: " + fullPath);
    console.log("Fullpath being splitted");
    const splitPath = fullPath.split('/');
    console.log("Fullpath is splitted as : " + splitPath);
    console.log("Keeping on the last element");
    const fileName = splitPath.splice(-1)[0];
    console.log("DONE. Last elements is : " + fileName);
    const splitFileName = fileName.split('.');
    console.log(splitFileName);
    const filePath = path.join(global.downloadDir, fileName);
    await browser.call(function () {
        return f_waitForFileExists(filePath, 60000);
    });
    var singlefile = fs.readdirSync(global.downloadDir);
    console.log("Validating the downloaded file");
    expect(singlefile[0]).toEqual("EPAM_Corporate_Overview_Q4_EOY.pdf");
    console.log("Downloaded file name verified as: " + singlefile);
    console.log("Deleting the downloaded files :" + singlefile);
    fs.unlinkSync(filePath);
    console.log("The downloaded file is deleted");
}

// function to pause the test for a given time so UI elements in the browser could load
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// recursive function to check if the given condition come true during the given delayAmount time in miliseconds
async function f_conditionCheck(condition, delayAmount) {

    console.log("Entered to the vibility check function " + delayAmount + " times");
    if (condition) {
        console.log("The given condition came true in " + delayAmount * 0.5 + " seconds");
    }
    else {
        if (delayAmount <= 0) {
            console.log("The given condition had not came true within 5 second");
        }

        if (delayAmount > 1) {
            await delay(500);
            f_conditionCheck(delayAmount - 500, condition);
        }
    }
}

// function to scrolling to the given element, also necessary to add elementName string desription for tracking
async function f_scrollTo(element, elementName) {
    console.log("Scrolling to the " + elementName + " element");
    await element.scrollIntoView({ block: 'center', inline: 'center' });
    await delay(2000);
    console.log("Scrolling to the " + elementName + " is done");
}

// function to get the hex color of an element based on the given whatColor (e.g. "background-color" or e.g. 'color' etc....) attribute
async function f_getColor(element, whatColor) {
    console.log("Color is just getting received");
    let rawColor = await element.getCSSProperty(whatColor);
    let parsedColor = rawColor.parsed;
    let backgroundHexColor = Object.values(parsedColor)[0];
    console.log("Color is gotten and it is :" + backgroundHexColor);
    return backgroundHexColor;
}

// function to fill the given inputFields with inputFieldsValue also for tracking it is necessary to add inputFieldsName string array for tracking
async function f_inputFieldTextInsert([...inputFields], [...inputFieldValues], [...inputFieldsName]) {
    for (let i = 0; i < inputFields.length; i++) {
        console.log("Inserting the >> " + inputFieldValues[i] + " << value into the >> " + inputFieldsName[i] + " << input field")
        await inputFields[i].setValue(inputFieldValues[i]);
        console.log("Value inserting done")
    }
}

// function to clear the given inputFields, it is necessary to add inputFieldsName string array description for each element for tracking
async function f_inputFieldClearer([...inputFields], [...inputFieldsName]) {
    for (let i = 0; i < inputFields.length; i++) {
        console.log("Clearing the >> " + inputFieldsName[i] + " << input field")
        await inputFields[i].clearValue();
        console.log("Input field clear done")
    }
}

// funcion to check if the color of the given input_fieldLabels are match the expectedHexColor, also input_fieldName string array for tracking are necessary for tracking
async function f_inputFieldLabelColorCheck([...input_fieldLabel], [...input_fieldName], expectedHexColor) {
    for (let i = 0; i < input_fieldLabel.length; i++) {
        console.log("Getting the color of the " + input_fieldName[i] + "'s label");
        //console.log("input_fieldLabel[i]");
        //console.log(input_fieldLabel[i]);
        let hexColor = await f_getColor(input_fieldLabel[i], 'color');
        console.log("The color of the " + input_fieldName[i] + "'s label is gotten which is " + hexColor);
        console.log("Checking if the " + input_fieldName[i] + "'s label's color matches " + expectedHexColor);
        expect(hexColor).toEqual(expectedHexColor);
        console.log("Verified. The " + input_fieldName[i] + "'s label's color matches " + expectedHexColor);
    }
}

describe("Test suite", () => {

    before(async () => {
        browser.setWindowSize(1920, 1200);

    })

    it("Check the title is correct", async () => {
        console.log("***************************************************************");
        console.log("Scenario 1. Validation of the title of EPAM.com website");
        console.log("***************************************************************");
        console.log("EPAM.com is being opened");
        await browser.url("https://www.epam.com/");
        console.log("EPAM.com is opened");
        const PageTitle = await browser.getTitle();
        //console.log(PageTitle);
        console.log("Verifying the title of the page");
        expect(PageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
        console.log("Title of the page is verified. (" + PageTitle + ")");
    });


    it("Check the ability to switch Light / Dark mode", async () => {
        console.log("***************************************************************");
        console.log("Scenario 2. Validation of the Theme switch button");
        console.log("***************************************************************");
        console.log("EPAM.com is being opened");
        await browser.url("https://www.epam.com/");
        console.log("EPAM.com is opened");
        let header = await $("header.header-ui-23");
        console.log("Checking the if Dark is the default background color of the page");
        let backgroundHexColor = await f_getColor(header, 'background-color');
        expect(backgroundHexColor).toEqual("#060606");
        console.log("Verified. Dark is the default background color of the page (" + backgroundHexColor + ")");
        headerColor = null;
        headerColorParsed = null;
        backgroundHexColor = null;

        console.log("Theme switcher is being clicked");
        await $("div.header__content>section>div.theme-switcher").click();
        console.log("Theme switcher clicked");
        await delay(2000);
        backgroundHexColor = await f_getColor(header, 'background-color');
        console.log("Checking the if Light page background color is set");
        expect(backgroundHexColor).toEqual("#fbfafa");
        console.log("Verified. The Light page background color is set (" + backgroundHexColor + ")");
        headerColor = null;
        headerColorParsed = null;
        backgroundHexColor = null;

        console.log("Theme switcher is being clicked");
        await $("div.header__content>section>div.theme-switcher").click();
        console.log("Theme switcher cliked");
        await delay(2000);
        backgroundHexColor = await f_getColor(header, 'background-color');
        console.log("Checking if Dark page background color is set");
        expect(backgroundHexColor).toEqual("#060606");
        console.log("Verified. Dark page background color is set (" + backgroundHexColor + ")");
        headerColor = null;
        headerColorParsed = null;
        backgroundHexColor = null;
    })

    it("Check that allow to change language to UA", async () => {
        console.log("***************************************************************");
        console.log("Scenario 3. Validation of the language switcher");
        console.log("***************************************************************");
        console.log("EPAM.com is being opened");
        await browser.url("https://www.epam.com/");
        console.log("EPAM.com is opened");

        await $("button.location-selector__button>span.location-selector__button-language").click();
        let tmpHTMLElement = await $("nav.location-selector__panel");
        console.log("Checking the visibility of the language selection panel");
        await f_conditionCheck(tmpHTMLElement.isDisplayed(), 5000);
        console.log("Language selection panel is visible");
        tmpHTMLElement = await $("nav.location-selector__panel a[href=\"https://careers.epam.ua\"]");
        console.log("Checking the visibility of the UA language in the selection panel");
        await f_conditionCheck(tmpHTMLElement.isDisplayed(), 5000);
        console.log("The UA language is visible in the language selection panel");
        console.log("The UA language is being clicked");
        await $("nav.location-selector__panel>ul>li:nth-child(6)").click();
        console.log("The UA language is clicked");
        await delay(1000);
        console.log("Querying the page URL");
        const PageURL = await browser.getUrl();
        console.log("URL is queried");
        console.log("Verifying the URL of the page");
        expect(PageURL).toEqual("https://careers.epam.ua/");
        console.log("URL of the page is verified. (https://careers.epam.ua/)");
        tmpHTMLElement = await $("button.location-selector__button").getText();
        console.log("Validating the language selector button if it is set to UA");
        expect(tmpHTMLElement).toEqual("Україна (UA)");
        console.log("The language selector button is set to UA");
    });

    it("Check the policies list", async () => {
        console.log("***************************************************************");
        console.log("Scenario 4. Check the policies list");
        console.log("***************************************************************");
        console.log("EPAM.com is being opened");
        await browser.url("https://www.epam.com/");
        console.log("EPAM.com is opened");
        const bottomElement = await $('div.policies');
        console.log("Scrolling to the botom of the page");
        await bottomElement.scrollIntoView({ block: 'center', inline: 'center' });
        await delay(2000);
        console.log("Scrolling to the botom of the page is done");
        let tmpHTMLElement = await $("div.policies-links-wrapper ul.policies-left li:nth-child(1)").getText();
        console.log("Validating the 'INVESTORS' POLICY element");
        expect(tmpHTMLElement).toEqual("INVESTORS");
        console.log("Validation of the 'INVESTORS' POLICY element is done");

        tmpHTMLElement = await $("div.policies-links-wrapper ul.policies-left li:nth-child(2)").getText();
        console.log("Validating the OPEN 'SOURCE' POLICY element");
        expect(tmpHTMLElement).toEqual("OPEN SOURCE");
        console.log("Validation of the 'OPEN SOURCE' POLICY element is done");

        tmpHTMLElement = await $("div.policies-links-wrapper ul.policies-left li:nth-child(3)").getText();
        console.log("Validating the OPEN 'PRIVACY POLICY' POLICY element");
        expect(tmpHTMLElement).toEqual("PRIVACY POLICY");
        console.log("Validation of the 'PRIVACY POLICY' POLICY element is done");

        tmpHTMLElement = await $("div.policies-links-wrapper ul.policies-right li:nth-child(1)").getText();
        console.log("Validating the 'COOKIE POLICY' POLICY element");
        expect(tmpHTMLElement).toEqual("COOKIE POLICY");
        console.log("Validation of the 'COOKIE POLICY' POLICY element is done");

        tmpHTMLElement = await $("div.policies-links-wrapper ul.policies-right li:nth-child(2)").getText();
        console.log("Validating the 'APPLICANT PRIVACY NOTICE' POLICY element");
        expect(tmpHTMLElement).toEqual("APPLICANT PRIVACY NOTICE");
        console.log("Validation of the 'APPLICANT PRIVACY NOTICE' POLICY element is done");

        tmpHTMLElement = await $("div.policies-links-wrapper ul.policies-right li:nth-child(3)").getText();
        console.log("Validating the 'WEB ACCESSIBILITY' POLICY element");
        expect(tmpHTMLElement).toEqual("WEB ACCESSIBILITY");
        console.log("Validation of the 'WEB ACCESSIBILITY' POLICY element is done");

    });

    it("Check that allow to switch location list by region", async () => {
        console.log("***************************************************************");
        console.log("Scenario 5. Validation of the location switch by region");
        console.log("***************************************************************");
        console.log("EPAM.com is being opened");
        await browser.url("https://www.epam.com/");
        console.log("EPAM.com is opened");
        const ourLocations = await $('div.js-tabs-links-list');
        console.log("Scrolling to the 'Our Loacations' part of the page");
        await ourLocations.scrollIntoView({ block: 'center', inline: 'center' });
        await delay(2000);
        console.log("Scrolling to the 'Our Loacations' part of the page is done");

        let tmpHTMLElement = await $("div.js-tabs-links-list div:nth-child(1)").getText();
        console.log("Validating the visibility of the 'AMERICAS' region element");
        expect(tmpHTMLElement).toEqual("AMERICAS");
        console.log("Visibility validation of the 'AMERICAS' region element is done");

        tmpHTMLElement = await $("div.js-tabs-links-list div:nth-child(2)").getText();
        console.log("Validating the visibility of the 'EMEA' region element");
        expect(tmpHTMLElement).toEqual("EMEA");
        console.log("Visibility validation of the 'EMEA' POLICY element is done");

        tmpHTMLElement = await $("div.js-tabs-links-list div:nth-child(3)").getText();
        console.log("Validating the visibility of the 'APAC' region element");
        expect(tmpHTMLElement).toEqual("APAC");
        console.log("Visibility validation of the 'APAC' region element is done");


        let tmpRegion = await $("div.js-tabs-links-list div:nth-child(1) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the active 'AMERICAS' region element");
        expect(regionFontHexColor).toEqual("#00f6ff");
        console.log("ValidatiON the color of the active 'AMERICAS' region element is done");
        tmpRegion = await $("div.js-tabs-links-list div:nth-child(2) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the default 'EMEA' region element");
        expect(regionFontHexColor).toEqual("#ffffff");
        console.log("Validating the color of the default 'EMEA' region element is done");
        tmpRegion = await $("div.js-tabs-links-list div:nth-child(3) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the default 'APAC' region element");
        expect(regionFontHexColor).toEqual("#ffffff");
        console.log("Validating the color of the default 'APAC' region element is done");

        console.log("Scrolling to the 'Our Loacations' part of the page");
        await ourLocations.scrollIntoView({ block: 'center', inline: 'center' });
        await delay(2000);
        console.log("Scrolling to the 'Our Loacations' part of the page is done");
        console.log("Clicking on the 'EMEA' element");
        await $("div.js-tabs-links-list div:nth-child(2) a").click();
        console.log("Clicking on the 'EMEA' element is done");
        tmpRegion = await $("div.js-tabs-links-list div:nth-child(1) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the default 'AMERICAS' region element");
        expect(regionFontHexColor).toEqual("#ffffff");
        console.log("Validating the color of the default 'AMERICAS' region element is done");
        tmpRegion = await $("div.js-tabs-links-list div:nth-child(2) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the active 'EMEA' region element");
        expect(regionFontHexColor).toEqual("#00f6ff");
        console.log("Validating the color of the active 'EMEA' region element is done");
        tmpRegion = await $("div.js-tabs-links-list div:nth-child(3) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the default 'APAC' region element");
        expect(regionFontHexColor).toEqual("#ffffff");
        console.log("Validating the color of the default 'APAC' region element is done");

        console.log("Scrolling to the 'Our Loacations' part of the page");
        await ourLocations.scrollIntoView({ block: 'center', inline: 'center' });
        await delay(2000);
        console.log("Scrolling to the 'Our Loacations' part of the page is done");
        console.log("Clicking on the 'APAC' element");
        await $("div.js-tabs-links-list div:nth-child(3) a").click();
        console.log("Clicking on the 'APAC' element is done");
        tmpRegion = await $("div.js-tabs-links-list div:nth-child(1) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the default 'AMERICAS' region element");
        expect(regionFontHexColor).toEqual("#ffffff");
        console.log("Validating the color of the default 'AMERICAS' region element is done");
        tmpRegion = await $("div.js-tabs-links-list div:nth-child(2) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the default 'EMEA' region element");
        expect(regionFontHexColor).toEqual("#ffffff");
        console.log("Validating the color of the default 'EMEA' region element is done");
        tmpRegion = await $("div.js-tabs-links-list div:nth-child(3) a");
        tmpRegionColor = await tmpRegion.getCSSProperty('color');
        tmpRegionColorParsed = tmpRegionColor.parsed;
        regionFontHexColor = Object.values(tmpRegionColorParsed)[0];
        console.log("Validating the color of the active 'APAC' region element");
        expect(regionFontHexColor).toEqual("#00f6ff");
        console.log("Validating the color of the active 'APAC' region element is done");
    });


    it("Check the search functionCheck the title is correct", async () => {
        console.log("***************************************************************");
        console.log("Scenario 6. Validation of the search function");
        console.log("***************************************************************");
        console.log("EPAM.com is being opened");
        await browser.url("https://www.epam.com/");
        console.log("EPAM.com is opened");
        //  button.header-search__button,header__icon
        console.log("Search dropdown button being clicked");
        await $("button.header-search__button,header__icon").click();
        console.log("Search dropdown btton is clicked");
        await delay(1000);
        // new_form_search
        const inputField = await $("#new_form_search");
        console.log("'AI' word being added to search inputfield");
        await inputField.setValue('AI');
        console.log("'AI' word is added to search input field");
        console.log("Search button being clicked");
        await $("button.custom-button span").click();
        console.log("Search button is clicked");
        await delay(1000);
        console.log("URL is being queried");
        const PageURL = await browser.getUrl();
        console.log("URL is queried");
        console.log("Verifying the URL of the page");
        expect(PageURL).toEqual("https://www.epam.com/search?q=AI");
        console.log("URL of the page is verified. (https://www.epam.com/search?q=AI)");
        await $("h2.search-results__counter").isDisplayed();
    });

    it("Check form's fields validation", async () => {
        console.log("***************************************************************");
        console.log("Scenario 7. Validation of form's fields of EPAM.com website");
        console.log("***************************************************************");
        console.log("EPAM.com is being opened");
        await browser.url("https://www.epam.com/about/who-we-are/contact");
        console.log("Contract site of EPAM.com is opened");
        const input_fName = await $("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name");
        const input_lName = await $("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name");
        const input_eMail = await $("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email");
        const input_phone = await $("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone");
        //const input_howDidYouHearUs = await $("div.layout-box__wrapper div:nth-child(8) div div span span span span.select2-selection__rendered");
        const input_howDidYouHearUs = await $("div.padding+div.dropdown-list div.dropdown-list__input");
        const input_checkBox = await $("div.checkbox-ui[data-required=\"true\"] p");
        const dropdown_firstEventInHearUsDropdown = await $("div.padding+div.dropdown-list div.dropdown-list__input div.os-content>li:nth-child(2)");
        const label_fName = await $("label[for=\"_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name\"]");
        const label_lName = await $("label[for=\"_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name\"]");
        const label_eMail = await $("label[for=\"_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email\"]");
        const label_phone = await $("label[for=\"_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone\"]");
        const label_howDidYouHearUs = await $("label[id=\"_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-label\"]");
        const border_checkBox = await $("div.checkbox-ui[data-required=\"true\"] div.checkbox__holder");
        const button_submit = await $("button[type=\"submit\"]");
        let colorBad = "#ff4d40";
        let colorGood = "#ffffff"


        await f_scrollTo(button_submit, "Submit button");
        console.log("Submit button being clicked");
        await button_submit.click();
        //await $("button[type=\"submit\"]").click();
        console.log("Submit button is clicked");
        await delay(2000);
        await f_inputFieldLabelColorCheck(
            [label_fName, label_lName, label_eMail, label_phone, label_howDidYouHearUs, border_checkBox],
            ["First Name", "Last Name", "E-mail", "Phone", "How did you hear us", "Checkbox"],
            colorBad
        );
        await f_inputFieldTextInsert(
            [input_fName, input_lName, input_eMail, input_phone],
            ['First', 'Last', 'E-mail', 'aaaa'],
            ["First Name", "Last Name", "E-mail", "Phone"]
        )
        await f_scrollTo(button_submit, "Submit button");
        await button_submit.click();
        await delay(4000);
        await f_inputFieldLabelColorCheck(
            [label_eMail, label_phone, label_howDidYouHearUs, border_checkBox],
            ["E-mail", "Phone", "How did you hear us", "Checkbox"],
            colorBad
        );
        await f_inputFieldLabelColorCheck(
            [label_fName, label_lName],
            ["First Name", "Last Name"],
            colorGood
        );
        await f_inputFieldClearer(
            [input_fName, input_lName, input_eMail, input_phone],
            ["First Name", "Last Name", "E-mail", "Phone"]
        );
        await f_inputFieldTextInsert(
            [input_eMail, input_phone],
            ['example@something', '12345678'],
            ["example@something", "12345678"]
        )
        await f_scrollTo(button_submit, "Submit button");
        await button_submit.click();
        await delay(2000);
        await f_inputFieldLabelColorCheck(
            [label_fName, label_lName, label_eMail, label_howDidYouHearUs, border_checkBox],
            ["First Name", "Last Name", "E-mail", "How did you hear us", "Checkbox"],
            colorBad
        );
        await f_inputFieldLabelColorCheck(
            [label_phone],
            ["Phone"],
            colorGood
        );
        await f_inputFieldClearer(
            [input_eMail, input_phone],
            ["E-mail", "Phone"]
        );

        await f_inputFieldTextInsert(
            [input_eMail],
            ['example@something.com'],
            ["example@something.com"]
        )
        await f_scrollTo(input_howDidYouHearUs, "How did you hear us?")
        await input_howDidYouHearUs.click();
        await dropdown_firstEventInHearUsDropdown.click();
        await delay(2000);
        await f_scrollTo(input_checkBox, "Checkbox");
        await input_checkBox.click();
        await delay(2000);
        await f_scrollTo(button_submit, "Submit button");
        await button_submit.click();
        await delay(2000);
        await f_inputFieldLabelColorCheck(
            [label_fName, label_lName],
            ["First Name", "Last Name"],
            colorBad
        );
        await f_inputFieldLabelColorCheck(
            [label_howDidYouHearUs, border_checkBox, label_eMail],
            ["How did you hear us", "Checkbox", "E-mail"],
            colorGood
        );


    });

    it("Check that the Company logo on the header lead to the main page", async () => {
        console.log("***************************************************************");
        console.log("Scenario 8. Validation of the header of EPAM.com website");
        console.log("***************************************************************");
        console.log("EPAM.com/about is being opened");
        await browser.url("https://www.epam.com/about");
        console.log("EPAM.com/about is opened");
        await $("div.header__content a[href=\"/\"]:nth-child(2)").click();
        delay(1000);
        console.log("Querying the page URL");
        const PageURL = await browser.getUrl();
        console.log("URL is queried");
        console.log("Verifying the URL of the page");
        expect(PageURL).toEqual("https://www.epam.com/");
        console.log("URL of the page is verified. (https://www.epam.com/)");

    });

    it("Check that allows to download report ", async () => {
        console.log("***************************************************************");
        console.log("Scenario 9. Check that allows to download report ");
        console.log("***************************************************************");
        console.log("EPAM.com/about is being opened");
        await browser.url("https://www.epam.com/about");
        console.log("EPAM.com/about is opened");
        const downloadButton = await $("div.colctrl__holder div.padding+div.button a.button-ui-23");
        await f_scrollTo(downloadButton, "Download button");
        console.log("Download button is being clicked");
        await downloadButton.click();
        console.log("Download button is clicked");
        await delay(3000);
        await f_downloadedFileNameAndExtensionCheck(downloadButton, "EPAM_Corporate_Overview_Q4_EOY", "pdf")

    });

})