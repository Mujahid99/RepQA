
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

browser.driver.manage().window().maximize();
browser.driver.manage().timeouts().setScriptTimeout(60000);
browser.ignoreSynchronization = true;

export class KomAddPage {
   submitbtn =  element (by.xpath('/html/body/div[1]/div[3]/form/button[1]'));
   AddToCartbtn = element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/form/div[4]/button'));
   addressInput = element (by.name("address"));
   searchbtn =  element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/button'));
   selectbtn =  element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/div[3]/div/div/app-bc-fulfillment-store/div/button'));
    
  

clickAddToCart(){

  this.AddToCartbtn.click();
  browser.sleep(3000);

}
     
    }


