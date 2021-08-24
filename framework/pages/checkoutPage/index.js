const { CHECKOUT_BUTTON } = require('../../constants');

class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async getCheckoutPageUrl() {
    // TODO: should be locate in base PAGE
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async getCheckout() {
    await Promise.all([
      await this.page.waitForSelector(CHECKOUT_BUTTON),
      await this.page.click(CHECKOUT_BUTTON),
      await this.page.waitForLoadState('networkidle'),
    ]);
    // await this.page.waitForSelector(CHECKOUT_BUTTON);
    // await this.page.click(CHECKOUT_BUTTON);
    // await this.page.waitForLoadState('networkidle');

    const orderUrl = await this.page.url();

    return orderUrl;
  }
}

module.exports = {
  CheckoutPage,
};
