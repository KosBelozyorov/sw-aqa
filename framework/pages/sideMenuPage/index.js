const {
  SIDE_MENU_MAIN_PAGE,
  SIDE_MENU_CATALOG_PAGE,
  SIDE_MENU_ORDERS_PAGE,
  SIDE_MENU_REFUNDS_PAGE,
  SIDE_MENU_MUTUAL_SETTLEMENTS_PAGE,
  SIDE_MENU_DOCS_PAGE,
  SIDE_MENU_PROMO_PAGE,
  SIDE_MENU_NEWS_PAGE,
  SIDE_MENU_BRANDS_PAGE,
  SIDE_MENU_PROFILE_PAGE,
  SIDE_MENU_LOGOUT,
  SIDE_MENU_ADMIN_DOCS,
  SIDE_MENU_ADMIN_DOCS_PAGE,
  SIDE_MENU_ADMIN_DOCS_GROUPS_PAGE,
} = require('../../constants');

class SideMenuPage {
  constructor(page) {
    this.page = page;
  }

  async gotoMainPage() {
    await this.page.click(SIDE_MENU_MAIN_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoCatalogPage() {
    await this.page.click(SIDE_MENU_CATALOG_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoOrdersPage() {
    await this.page.click(SIDE_MENU_ORDERS_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoRefundsPage() {
    await this.page.click(SIDE_MENU_REFUNDS_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoPaymentsPage() {
    await this.page.click(SIDE_MENU_MUTUAL_SETTLEMENTS_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoDocsPage() {
    await this.page.click(SIDE_MENU_DOCS_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoAdminDocsPage() {
    await this.page.click(SIDE_MENU_ADMIN_DOCS);
    await this.page.click(SIDE_MENU_ADMIN_DOCS_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoAdminDocsGroupPage() {
    await this.page.click(SIDE_MENU_ADMIN_DOCS);
    await this.page.click(SIDE_MENU_ADMIN_DOCS_GROUPS_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoPromoPage() {
    await this.page.click(SIDE_MENU_PROMO_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoNewsPage() {
    await this.page.click(SIDE_MENU_NEWS_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoBrandsPage() {
    await this.page.click(SIDE_MENU_BRANDS_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async gotoProfilePage() {
    await this.page.click(SIDE_MENU_PROFILE_PAGE);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async logout() {
    await this.page.click(SIDE_MENU_LOGOUT);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }
}

module.exports = {
  SideMenuPage,
};
