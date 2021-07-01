const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class InsightsPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.epam.com/insights";
      this.insightsTitle = new Element("Insights Title", ".title--mixed-case");  
    };
    open() {
      return super.open(this.url);
    };
};

module.exports = InsightsPage;