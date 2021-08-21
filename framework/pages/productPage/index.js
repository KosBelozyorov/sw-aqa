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
    await this.page.click(
      '.dl-good-details + .cart-control-wrapper .input-group-btn:last-child',
    );
  }

  async addToCart() {
    await this.page.click('.dl-good-details + .cart-control-wrapper .add-cart');
  }

  async clickOnCartButton() {
    await this.page.click('.header-btn button');
  }

  async checkProductInCart() {
    // await this.page.click('.header-btn button');
    let productInCart = await this.page.innerText(
      'span.small.text-muted.ng-binding',
    );
    console.log('productInCart: ', productInCart);

    let product = await this.page.innerText(
      '.dl-horizontal.dl-good-details > dt:first-child + dd',
    );
    console.log('product: ', product);

    let result = product === productInCart ? true : false;

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
