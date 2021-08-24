const {
  CART_BUTTON,
  REMOVE_ALL_PRODUCTS_BUTTON,
  CART_LIST_ITEM,
  REMOVE_CART_LIST_ITEM_BUTTON,
} = require('../../constants');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickOnCartButton() {
    await this.page.click(CART_BUTTON);
  }

  async clickOnRemoveAllProductsButton() {
    await this.page.click(REMOVE_ALL_PRODUCTS_BUTTON);
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
}

module.exports = {
  CartPage,
};
