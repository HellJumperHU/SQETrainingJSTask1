const { Before } = require("@wdio/cucumber-framework");

Before({name: "BeforeHook"},()=>{
    browser.setWindowSize(1920, 1200);
})