
var fs = require('fs'); //needed for screenshot function
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

browser.driver.manage().window().maximize();
browser.driver.manage().timeouts().setScriptTimeout(60000);


export class KomHomePage {
   submitbtn =  element (by.xpath('/html/body/div[1]/div[3]/form/button[1]'));
   AddToCartbtn = element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/form/div[4]/button'));
   addressInput = element (by.name("address"));
   searchbtn =  element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/button'));
   selectbtn =  element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/div[3]/div/div/app-bc-fulfillment-store/div/button'));
    
   

  getURL() {
    browser.ignoreSynchronization = true;
    browser.get('https://staging_heabpi:KNHKRsmpZc4N@shopkombrewchacom.stage.site/');
  }

  

clickYes(){

  this.submitbtn.click();
  browser.sleep(3000);

}

getApplicationTitle(): any {
  return browser.getTitle(); 
  browser.sleep(5000);       
}

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


