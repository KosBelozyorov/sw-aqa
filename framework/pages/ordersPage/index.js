const { waits } = require('../../../lib');
const { getColumns } = require('../../asserts/common/getColumns');

class OrdersPage {
  constructor(page) {
    this.page = page;
  }

  async getOrdersPageTitleContent() {
    // TODO: should be locate in base PAGE
    await waits(this.page).waitVisibility('#page-wrapper');
    const elementHandle = await this.page.$('h4.page-title');

    return elementHandle.textContent();
  }

  async getSortingColumns() {
    await this.page.waitForSelector('th a.sortable', { timeout: 5000 });
    const arr = await getColumns(this.page).sortingColumns('th a.sortable');

    for await (const el of arr) {
      await this.page.click(`text=${await el.innerText()}`, { timeout: 3000 });
    }

    return arr;
  }
}

module.exports = {
  OrdersPage,
};
