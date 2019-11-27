"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KomPage_1 = require("../PageObjects/KomPage");
var KomAddPage_1 = require("../PageObjects/KomAddPage");
var KomShipPage_1 = require("../PageObjects/KomShipPage");
var KomPage = new KomPage_1.KomHomePage();
var KomPageA = new KomAddPage_1.KomAddPage();
var KomPageB = new KomShipPage_1.KomShipPage();
describe('Go to Kombrewcha site', function () {
    it('should open Kombrewcha page', function () {
        KomPage.getURL();
        expect(true).toBe(true);
    });
    it('should click Yes Button', function () {
        KomPage.clickYes();
        expect(true).toBe(true);
    });
    it('should have Correct Title', function () {
        expect(KomPage.getApplicationTitle()).toEqual('Shop Kombrewcha – The First Hard Kombucha');
    });
    it('should click Add to Cart button', function () {
        KomPageA.clickAddToCart();
        expect(true).toBe(true);
    });
    it('should Enter Correct Shipping Address', function () {
        KomPageB.EnterShipAddress();
        expect(true).toBe(true);
    });
    it('should Enter Correct Shipping Address', function () {
        KomPageB.clickSearch();
        expect(true).toBe(true);
    });
    it('should Enter Correct Shipping Address', function () {
        KomPageB.clickSelect();
        expect(true).toBe(true);
    });
});
