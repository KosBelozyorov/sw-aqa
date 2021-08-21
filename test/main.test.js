const { expect, Page, test } = require('@playwright/test');

const {
  LoginPage,
  OrdersPage,
  MainPage,
  ProductPage,
  CheckoutPage,
  SideMenu,
} = require('../framework');

const {
  DEV_LOGIN_PAGE_URL,
  DEV_CATALOG_PAGE_URL,
  DEV_ORDERS_PAGE_URL,
  DEV_MAIN_PAGE_URL,
  DEV_CHECKOUT_PAGE_URL,
  SEARCH_KEY_WORD,
  SEARCH_CATEGORY,
} = require('../framework/constants');

// let browser = null;
// let page = null;

test.describe('Suite test', () => {
  let page = Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto(DEV_LOGIN_PAGE_URL);
  });

  test('login as user case #1', async () => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);

    await loginPage.loginAsUser();

    expect(await mainPage.gotoMainPage()).toEqual(DEV_MAIN_PAGE_URL);
  });
});
