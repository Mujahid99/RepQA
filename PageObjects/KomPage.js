"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs'); //needed for screenshot function
var protractor_1 = require("protractor");
protractor_1.browser.driver.manage().window().maximize();
protractor_1.browser.driver.manage().timeouts().setScriptTimeout(60000);
var KomHomePage = /** @class */ (function () {
    function KomHomePage() {
        this.submitbtn = protractor_1.element(protractor_1.by.xpath('/html/body/div[1]/div[3]/form/button[1]'));
        this.AddToCartbtn = protractor_1.element(protractor_1.by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/form/div[4]/button'));
        this.addressInput = protractor_1.element(protractor_1.by.name("address"));
        this.searchbtn = protractor_1.element(protractor_1.by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/button'));
        this.selectbtn = protractor_1.element(protractor_1.by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/div[3]/div/div/app-bc-fulfillment-store/div/button'));
        /*setFirstNumber(firstNum: number) {
          this.firstNumber.sendKeys(firstNum);
        }
      
        setSecondNumber(secondNum: number) {
          this.secondNumber.sendKeys(secondNum);
        }
      
         public add(x: number, y: number) {
              this.firstNumber.sendKeys(x);
              this.secondNumber.sendKeys(y);
              this.goButton.click();
        }*/
    }
    KomHomePage.prototype.getURL = function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('https://staging_heabpi:KNHKRsmpZc4N@shopkombrewchacom.stage.site/');
    };
    KomHomePage.prototype.clickYes = function () {
        this.submitbtn.click();
        protractor_1.browser.sleep(3000);
    };
    KomHomePage.prototype.getApplicationTitle = function () {
        return protractor_1.browser.getTitle();
        protractor_1.browser.sleep(5000);
    };
    return KomHomePage;
}());
exports.KomHomePage = KomHomePage;
