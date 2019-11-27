
import {} from 'jasmine';
import {KomHomePage} from '../PageObjects/KomPage';
import {KomAddPage} from '../PageObjects/KomAddPage';
import {KomShipPage} from '../PageObjects/KomShipPage';


let KomPage = new KomHomePage();
let KomPageA = new KomAddPage();
let KomPageB = new KomShipPage();

describe('Go to Kombrewcha site', function() {

  it('should open Kombrewcha page', function() {
    KomPage.getURL();
    expect(true).toBe(true);
          });
   

  it('should click Yes Button', function() {
    KomPage.clickYes();
    expect(true).toBe(true);
          });

  it('should have Correct Title', function() {
            expect<any>(KomPage.getApplicationTitle()).toEqual('Shop Kombrewcha – The First Hard Kombucha');
          });

  it('should click Add to Cart button', function() {
            KomPageA.clickAddToCart();
            expect(true).toBe(true);
          
          });

  it('should Enter Correct Shipping Address', function() {
            KomPageB.EnterShipAddress();
            expect(true).toBe(true);
          
          });

  it('should Enter Correct Shipping Address', function() {
            KomPageB.clickSearch();
            expect(true).toBe(true);
          
          });

  it('should Enter Correct Shipping Address', function() {
            KomPageB.clickSelect();
            expect(true).toBe(true);
          
          });


});

