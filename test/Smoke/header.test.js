const { expect, Page, test } = require('@playwright/test');

const {
  LoginPage,
  HeaderPage,
  MainPage,
  ProfilePage,
} = require('../../framework');

const {
  DEV_LOGIN_PAGE_URL,
  DEV_MAIN_PAGE_URL,
  DEV_PROFILE_PAGE_URL,
} = require('../../framework/constants');

test.describe('Suite of the Heder menu tests:', () => {
  let page = Page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    // interception of yandex metric requests
    page.route('**', route => {
      const request = route.request();
      // console.log('request url: ', request.url());
      if (
        request.url().match('yandex') ||
        request.url().match('metrika') ||
        request.url() ===
          'https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js'
      ) {
        // eslint-disable-next-line no-console
        console.log('blocked by client');
        return route.abort('blockedbyclient');
      }

      return route.continue();
    });

    await page.goto(DEV_LOGIN_PAGE_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Case #1 Click on User menu', async () => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    const headerPage = new HeaderPage(page);

    await loginPage.loginAsUser();
    expect(await mainPage.gotoMainPage()).toEqual(DEV_MAIN_PAGE_URL);

    await headerPage.clickUserMenu();
    // eslint-disable-next-line no-unused-expressions
    expect(await headerPage.isUserMenuVisible()).toBeTruthy;
  });

  test('Case #2 Go to Profile page from User menu', async () => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    const headerPage = new HeaderPage(page);
    const profilePage = new ProfilePage(page);

    await loginPage.loginAsUser();
    expect(await mainPage.gotoMainPage()).toEqual(DEV_MAIN_PAGE_URL);

    await headerPage.clickUserMenu();
    await headerPage.gotoUserProfilePage();
    expect(await profilePage.goToProfilePage()).toEqual(DEV_PROFILE_PAGE_URL);
  });

  test('Case #3 Logout from User menu', async () => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    const headerPage = new HeaderPage(page);

    await loginPage.loginAsUser();
    expect(await mainPage.gotoMainPage()).toEqual(DEV_MAIN_PAGE_URL);

    await headerPage.clickUserMenu();
    await headerPage.logout();
    expect(await loginPage.gotoLoginPage()).toEqual(DEV_LOGIN_PAGE_URL);
  });
});
