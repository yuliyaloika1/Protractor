const {expect} = require("chai");
const PageFactory = require("../utils/page_objects/pageFactory");
const {protractor, browser, Key} = require('protractor');
const EC = protractor.ExpectedConditions;

describe('Results of skill search',  function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('selecting management positions', async function() {
        await PageFactory.getPage('Careers').open();
        await PageFactory.getPage('Careers').acceptCookie().click();
        await PageFactory.getPage('Careers').getSkills().click();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getManagement().click();
        await PageFactory.getPage('Careers').getSkills().click();
        await PageFactory.getPage('Careers').wait(1000);

    });
});