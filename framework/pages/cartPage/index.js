const {
  CART_BUTTON,
  REMOVE_ALL_PRODUCTS_BUTTON,
  CART_LIST_ITEM,
  REMOVE_CART_LIST_ITEM_BUTTON,
  CLOSE_CART,
} = require('../../constants');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickOnCartButton() {
    await this.page.click(CART_BUTTON);
  }

  async clickOnRemoveAllProductsButton() {
    const productsInCart = await this.page.$$(CART_LIST_ITEM);
    // eslint-disable-next-line no-unused-expressions
    productsInCart.length > 0
      ? await this.page.click(REMOVE_ALL_PRODUCTS_BUTTON)
      : await this.page.click(CLOSE_CART);
  }

  // TODO: need refactoring
  async clickOnRemoveProductButton() {
    await this.page.click(REMOVE_CART_LIST_ITEM_BUTTON);
  }

  async isCartEmpty() {
    let cartEmpty = true;
    const productsInCart = await this.page.$$(CART_LIST_ITEM);
    cartEmpty = productsInCart.length > 0 ? false : cartEmpty;

    return cartEmpty;
  }

  async clickOnCheckoutButton() {
    // await this.page.click('.header-btn button');
    await this.page.click('a.btn.btn-success');
  }
}

module.exports = {
  CartPage,
};
