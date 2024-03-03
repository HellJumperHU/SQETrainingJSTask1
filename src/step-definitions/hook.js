const { Before } = require("@wdio/cucumber-framework");
const ProductCommon = require('../po/common/product.common');


Before({name: "BeforeHook"},()=>{
    browser.setWindowSize(1920, 1200);
})

Before({ tags: "@freeUpProductVariable" }, function () {
    ProductCommon.productName01=null;
    ProductCommon.productName02=null;

  });