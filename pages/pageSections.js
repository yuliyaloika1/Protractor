const HomePage = require("./contact_us/contact_us.js");
const OurWorkPage = require("./insights_page/insights_page");
const BasePage = require("./base_page/base_page");
const CareersPage = require("./careers_page/careers_page.js");

class PageSections {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new ContactUs();
            case "Careers":
                return new CareersPage();
            case "Our Work":
                return new InsightsPage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageSections;