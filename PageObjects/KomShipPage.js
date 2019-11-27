"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
protractor_1.browser.driver.manage().window().maximize();
protractor_1.browser.driver.manage().timeouts().setScriptTimeout(60000);
protractor_1.browser.ignoreSynchronization = true;
var KomShipPage = /** @class */ (function () {
    function KomShipPage() {
        this.submitbtn = protractor_1.element(protractor_1.by.xpath('/html/body/div[1]/div[3]/form/button[1]'));
        this.AddToCartbtn = protractor_1.element(protractor_1.by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/form/div[4]/button'));
        this.addressInput = protractor_1.element(protractor_1.by.name("address"));
        this.searchbtn = protractor_1.element(protractor_1.by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/button'));
        this.selectbtn = protractor_1.element(protractor_1.by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/div[3]/div/div/app-bc-fulfillment-store/div/button'));
    }
    KomShipPage.prototype.EnterShipAddress = function () {
        this.addressInput.sendKeys('Lalu Deli');
        protractor_1.browser.sleep(3000);
        this.addressInput.sendKeys(protractor_1.protractor.Key.DOWN);
        protractor_1.browser.sleep(3000);
        this.addressInput.sendKeys(protractor_1.protractor.Key.ENTER);
        protractor_1.browser.sleep(3000);
    };
    KomShipPage.prototype.clickSearch = function () {
        this.searchbtn.click();
        protractor_1.browser.sleep(5000);
    };
    KomShipPage.prototype.clickSelect = function () {
        this.selectbtn.click();
        protractor_1.browser.sleep(3000);
    };
    return KomShipPage;
}());
exports.KomShipPage = KomShipPage;
