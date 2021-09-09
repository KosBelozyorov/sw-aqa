const {
  PRODUCT_PAGE_ADD_TO_CART_BUTTON,
  PRODUCT_PAGE_PLUS_BUTTON,
  PRODUCT_PAGE_PACKAGING_BUTTON,
} = require('../../constants');

class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async getProductPageUrl() {
    // TODO: should be locate in base PAGE
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async plusOneProduct() {
    await this.page.click(PRODUCT_PAGE_PLUS_BUTTON);
  }

  async selectPackage(value) {
    await this.page.waitForSelector(PRODUCT_PAGE_PACKAGING_BUTTON);
    await this.page.click(PRODUCT_PAGE_PACKAGING_BUTTON);
    await this.page.waitForSelector(
      `.cart-goods .cart-control-wrapper .dropdown-menu.inner li:nth-of-type(${value})`,
    );
    await this.page.click(
      `.cart-goods .cart-control-wrapper .dropdown-menu.inner li:nth-of-type(${value})`,
    );
  }

  async addToCart() {
    await this.page.click(PRODUCT_PAGE_ADD_TO_CART_BUTTON);
  }

  async checkAddedProductAmount() {
    await this.page.waitForSelector('#tch_1');
    await this.page.click(PRODUCT_PAGE_PLUS_BUTTON);
    // let valueAmount;
    const amountValue = await this.page.$('#tch_1');
    // eslint-disable-next-line prefer-const
    const valueAmount = await amountValue.inputValue();
    console.log('valueAmount: ', valueAmount);
    await this.page.click(PRODUCT_PAGE_ADD_TO_CART_BUTTON);
    await this.page.click('.header-btn button');
    const productInCart = await this.page.$('.cart-list .input-group input');
    const amountInCart = await productInCart.inputValue();

    const result = amountInCart === valueAmount;

    return result;
  }

  async checkProductInCart() {
    await this.page.click('.header-btn button');
    const productInCart = await this.page.innerText(
      'span.small.text-muted.ng-binding',
    );
    // eslint-disable-next-line no-console
    console.log('productInCart: ', productInCart);

    const product = await this.page.innerText(
      '.dl-horizontal.dl-good-details > dt:first-child + dd',
    );
    // eslint-disable-next-line no-console
    console.log('product: ', product);

    let result = '';
    result = product === productInCart ? true : result;

    return result;
  }

  async clickOnCheckoutButton() {
    await this.page.click('.header-btn button');
    await this.page.click('a.btn.btn-success');
  }
}

module.exports = {
  ProductPage,
};
