const { waits } = require('../../../lib');
const { SEARCH_FORM_INPUT, MULTIPLES_FILTER } = require('../../constants');

class MainPage {
  constructor(page) {
    this.page = page;
  }

  async gotoMainPage() {
    // TODO: should be locate in base PAGE
    await this.page.waitForNavigation();

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async getMainPageTitleContent() {
    // TODO: should be locate in base PAGE
    await waits(this.page).waitVisibility('#page-wrapper');
    const elementHandle = await this.page.$('h4.page-title');

    return elementHandle.textContent();
  }

  async useSearch(category = '', keyword) {
    let result = null;

    await waits(this.page).waitVisibility('#search_groups');
    await this.page.click('#search_groups');

    if (category) {
      await waits(this.page).waitVisibility(MULTIPLES_FILTER);
      await this.page.click(MULTIPLES_FILTER);
      await this.page.type(MULTIPLES_FILTER, category);
      await waits(this.page).waitVisibility(`text=${category}`);
      await this.page.click(`text=${category}`);
    }

    await this.page.click(SEARCH_FORM_INPUT);
    await this.page.fill(SEARCH_FORM_INPUT, keyword);
    await this.page.waitForSelector('ul.typeahead__list > li', {
      timeout: 5000,
    });
    result = await this.page.$$('ul.typeahead__list > li');
    console.log('Quick searh result: ', await result.length);

    let searchResult = false;
    if ((await result.length) === 1) {
      result = await this.page.$$('ul.typeahead__list > li.typeahead__empty');
      searchResult = true;
    } else if ((await result.length) > 1) {
      result = await this.page.$$('ul.typeahead__list > li.typeahead__group');
      searchResult = (await result.length) > 1 ? true : false;
    }

    console.log('searchResult: ', searchResult);

    return searchResult;
  }

  async clickOnProductFromSearchResult() {
    await this.page.waitForSelector('.typeahead__group-items');
    await this.page.click('.typeahead__group-items');
  }
}

module.exports = {
  MainPage,
};
