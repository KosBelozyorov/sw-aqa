const { waits } = require('../../../lib');
const {
  SEARCH_FORM_INPUT,
  MULTIPLES_FILTER,
  CHECKBOX_SEARCH_IN_PRODUCT_NAME,
} = require('../../constants');

class MainPage {
  constructor(page) {
    this.page = page;
  }

  async gotoMainPage() {
    // TODO: should be locate in base PAGE
    await this.page.waitForNavigation(/* { url: `${DEV_MAIN_PAGE_URL}` } */);

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async getMainPageTitleContent() {
    // TODO: should be locate in base PAGE
    await waits(this.page).waitVisibility('#page-wrapper');
    const elementHandle = await this.page.$('h4.page-title');

    return elementHandle.textContent();
  }

  async uncheckSearchInProductName() {
    const checkbox = CHECKBOX_SEARCH_IN_PRODUCT_NAME;
    await waits(this.page).waitVisibility(checkbox);
    await this.page.uncheck(checkbox);
  }

  async useSearch(category = '', keyword) {
    let result = null;

    await waits(this.page).waitVisibility('#search_groups');
    await this.page.click('#search_groups');

    if (category) {
      await Promise.all([
        await waits(this.page).waitVisibility(MULTIPLES_FILTER),
        await this.page.click(MULTIPLES_FILTER),
        await this.page.type(MULTIPLES_FILTER, category),
        await waits(this.page).waitVisibility(`text=${category}`),
        await this.page.check(`text=${category} >> input[type="checkbox"]`),
      ]);
    }

    await Promise.all([
      await this.page.click(SEARCH_FORM_INPUT),
      await this.page.fill(SEARCH_FORM_INPUT, keyword),
      await this.page.waitForSelector('ul.typeahead__list > li', {
        timeout: 5000,
      }),
    ]);

    result = await this.page.$$('ul.typeahead__list > li');
    // eslint-disable-next-line no-console
    console.log('Quick searh result: ', await result.length);

    let searchResult = false;
    if ((await result.length) === 1) {
      result = await this.page.$$('ul.typeahead__list > li.typeahead__empty');
      searchResult = true;
    } else if ((await result.length) > 1) {
      result = await this.page.$$('ul.typeahead__list > li.typeahead__group');
      searchResult = (await result.length) > 1 ? true : searchResult;
    }

    // eslint-disable-next-line no-console
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
