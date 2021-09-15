const { expect, test } = require('@playwright/test');

const {
  LoginPage,
  HeaderPage,
  CartPage,
  MainPage,
  ProductPage,
  CheckoutPage,
  SideMenuPage,
} = require('../../framework');

const {
  DEV_LOGIN_PAGE_URL,
  DEV_MAIN_PAGE_URL,
  DEV_CHECKOUT_PAGE_URL,
  SEARCH_KEY_WORD,
  SEARCH_CATEGORY,
} = require('../../framework/constants');

test.beforeEach(async ({ page }) => {
  // interception of yandex metric requests
  page.route('**', route => {
    const request = route.request();
    // console.log('request url: ', request.url());
    if (request.url().match('yandex') || request.url().match('metrika')) {
      // eslint-disable-next-line no-console
      console.log('blocked by client');
      return route.abort('blockedbyclient');
    }

    return route.continue();
  });

  await page.goto(DEV_LOGIN_PAGE_URL);
});

// test.afterEach(async ({ page, context }) => {
//   await context.close();
//   await page.close();
// });

test('Case #01 Login as user and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const sideMenuPage = new SideMenuPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  expect(await mainPage.gotoMainPage()).toEqual(DEV_MAIN_PAGE_URL);
  // await page.screenshot({ path: `login_as_user_case_1.png` });

  await sideMenuPage.logout();
  expect(await loginPage.gotoLoginPage()).toEqual(DEV_LOGIN_PAGE_URL);
  // await page.screenshot({ path: `logout_as_user_case_1.png` });
});

test('Case #02 Using search on main page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();

  // eslint-disable-next-line no-unused-expressions
  expect(
    await mainPage.useSearch(SEARCH_CATEGORY.second, SEARCH_KEY_WORD.second),
  ).toBeTruthy;
});

test('Case #03 Using search on main page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();

  // eslint-disable-next-line no-unused-expressions
  expect(await mainPage.useSearch(SEARCH_CATEGORY.third, SEARCH_KEY_WORD.third))
    .toBeTruthy;
});

test('case #04 Using search on main page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.useSearch(SEARCH_CATEGORY.first, SEARCH_KEY_WORD.fourth);

  // eslint-disable-next-line no-unused-expressions
  expect(
    await mainPage.useSearch(SEARCH_CATEGORY.first, SEARCH_KEY_WORD.fourth),
  ).toBeTruthy;
});

test('case #05 Using search on main page by product code', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.useSearch('', SEARCH_KEY_WORD.fifth);

  // eslint-disable-next-line no-unused-expressions
  expect(await mainPage.useSearch('', SEARCH_KEY_WORD.fifth)).toBeTruthy;
});

test('case #06 Using search on main page by product description', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.uncheckSearchInProductName();
  await mainPage.useSearch('', SEARCH_KEY_WORD.sixth);

  // eslint-disable-next-line no-unused-expressions
  expect(await mainPage.useSearch('', SEARCH_KEY_WORD.sixth)).toBeTruthy;
});

test('case #07 Using search on main page by product description', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.uncheckSearchInProductName();

  // eslint-disable-next-line no-unused-expressions
  expect(
    await mainPage.useSearch(SEARCH_CATEGORY.second, SEARCH_KEY_WORD.sixth),
  ).toBeTruthy;
});

test('case #08 Using search on main page by product description', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.uncheckSearchInProductName();

  // eslint-disable-next-line no-unused-expressions
  expect(await mainPage.useSearch(SEARCH_CATEGORY.first, SEARCH_KEY_WORD.sixth))
    .toBeTruthy;
});

test('Case #09 Change language (UA) on main page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const headerPage = new HeaderPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  expect(await mainPage.gotoMainPage()).toEqual(DEV_MAIN_PAGE_URL);

  await headerPage.changeLanguage('UA');

  expect(await mainPage.getMainPageTitleContent()).toContain('Головна панель');
});

test('Case #10 Change language (RU) on main page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const headerPage = new HeaderPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  expect(await mainPage.gotoMainPage()).toEqual(DEV_MAIN_PAGE_URL);

  await headerPage.changeLanguage('RU');

  expect(await mainPage.getMainPageTitleContent()).toContain('Главная панель');
});

test('case #11 Add the product to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const productPage = new ProductPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.useSearch(SEARCH_CATEGORY.first, SEARCH_KEY_WORD.fourth);

  await mainPage.clickOnProductFromSearchResult();
  expect(await productPage.getProductPageUrl()).toEqual(
    'https://b2b-dev2.sanwell.biz/catalog/2875',
  );

  await productPage.plusOneProduct();
  await productPage.addToCart();

  // eslint-disable-next-line no-unused-expressions
  expect(await productPage.checkProductInCart()).toBeTruthy;
});

test('case #12 Add the product to the cart(change product amount)', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();

  await cartPage.clickOnCartButton();
  await cartPage.clickOnRemoveAllProductsButton();

  await mainPage.useSearch('', SEARCH_KEY_WORD.seventh);
  await mainPage.clickOnProductFromSearchResult();

  expect(await productPage.getProductPageUrl()).toEqual(
    'https://b2b-dev2.sanwell.biz/catalog/5368',
  );
  await productPage.selectPackage(2);
  expect(await productPage.checkAddedProductAmount()).toBeTruthy();
});

test('case #13 Add the product to the cart(change product amount)', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();

  await cartPage.clickOnCartButton();
  await cartPage.clickOnRemoveAllProductsButton();

  await mainPage.useSearch('', SEARCH_KEY_WORD.seventh);
  await mainPage.clickOnProductFromSearchResult();

  expect(await productPage.getProductPageUrl()).toEqual(
    'https://b2b-dev2.sanwell.biz/catalog/5368',
  );
  await productPage.selectPackage(3);
  expect(await productPage.checkAddedProductAmount()).toBeTruthy();
});

test('case #14 Add the product to the cart and check amount', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await cartPage.clickOnCartButton();
  await cartPage.clickOnRemoveAllProductsButton();

  await mainPage.useSearch(SEARCH_CATEGORY.first, SEARCH_KEY_WORD.fourth);
  await mainPage.clickOnProductFromSearchResult();

  expect(await productPage.checkAddedProductAmount()).toBeTruthy();
});

test('case #15 Remove all products from the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const cartPage = new CartPage(page);
  const productPage = new ProductPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.useSearch(SEARCH_CATEGORY.first, SEARCH_KEY_WORD.fourth);

  await mainPage.clickOnProductFromSearchResult();

  await productPage.plusOneProduct();
  await productPage.addToCart();
  await cartPage.clickOnCartButton();
  await cartPage.clickOnRemoveAllProductsButton();
  // eslint-disable-next-line no-unused-expressions
  expect(await cartPage.isCartEmpty()).toBeTruthy;
});

test('case #16 Remove product from the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const cartPage = new CartPage(page);
  const productPage = new ProductPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.useSearch(SEARCH_CATEGORY.first, SEARCH_KEY_WORD.fourth);

  await mainPage.clickOnProductFromSearchResult();

  await productPage.plusOneProduct();
  await productPage.addToCart();
  await cartPage.clickOnCartButton();
  await cartPage.clickOnRemoveProductButton();
  // eslint-disable-next-line no-unused-expressions
  expect(await cartPage.isCartEmpty()).toBeTruthy;
});

test('case #17 Create order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);
  const cartPage = new CartPage(page);

  // await page.goto(DEV_LOGIN_PAGE_URL);
  await loginPage.loginAsUser();
  await mainPage.useSearch(SEARCH_CATEGORY.first, SEARCH_KEY_WORD.fourth);

  await mainPage.clickOnProductFromSearchResult();
  // expect(await productPage.getProductPageUrl()).toEqual(
  //   'https://b2b-dev2.sanwell.biz/catalog/2875',
  // );

  await productPage.plusOneProduct();
  await productPage.addToCart();
  // await productPage.clickOnCartButton();
  // eslint-disable-next-line no-unused-expressions
  expect(await productPage.checkProductInCart()).toBeTruthy;

  await cartPage.clickOnCheckoutButton();
  expect(await checkoutPage.getCheckoutPageUrl()).toEqual(
    DEV_CHECKOUT_PAGE_URL,
  );

  // await checkoutPage.getCheckout();
  expect(await checkoutPage.getCheckout()).toContain(
    'https://b2b-dev2.sanwell.biz/orders/view?id=',
  );
});
