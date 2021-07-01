const {expect} = require("chai");
const PageFactory = require("../pages/pageFactory");
const {protractor, browser, Key} = require('protractor');
const EC = protractor.ExpectedConditions;

describe('Results of skill search',  function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('selecting management positions', async function() {
        await PageSections.getPage('Careers').open();
        await PageSections.getPage('Careers').acceptCookie().click();
        await PageSections.getPage('Careers').getLocationDropDown().click();
        await PageSections.getPage('Careers').wait(1000);
        await PageSections.getPage('Careers').selectLocation('Minsk');
        await PageSections.getPage('Careers').wait(1000);
        await PageSections.getPage('Careers').getSkills().click();
        await PageSections.getPage('Careers').wait(1000);
        await PageSections.getPage('Careers').getManagement().click();
        await PageSections.getPage('Careers').getSkills().click();
        await PageSections.getPage('Careers').wait(1000);
        const ManagementItem = await PageFactory.getPage('Careers').getElement().getTexts();
        expect(ManagementItem).to.include('Management');

    });
});