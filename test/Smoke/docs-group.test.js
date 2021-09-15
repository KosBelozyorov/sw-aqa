const { default: test, expect } = require('@playwright/test');
const {
  LoginPage,
  AdminDocsGroupsPage,
  SideMenuPage,
} = require('../../framework');

const {
  DEV_LOGIN_PAGE_URL,
  DEV_ADMIN_DOCS_GROUPS_PAGE_URL,
  NEW_DOCS_GROUP_NAME_UA,
  NEW_DOCS_GROUP_NAME_RU,
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

test('Case #01 Click on Docs Group', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sideMenuPage = new SideMenuPage(page);

  await loginPage.loginAsAdmin();

  expect(await sideMenuPage.gotoAdminDocsGroupPage()).toEqual(
    DEV_ADMIN_DOCS_GROUPS_PAGE_URL,
  );
});

test('Case #02 Click [Add new Group] button in Docs Groups @smoke', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const sideMenuPage = new SideMenuPage(page);
  const adminDocsGroupsPage = new AdminDocsGroupsPage(page);

  await loginPage.loginAsAdmin();

  await sideMenuPage.gotoAdminDocsGroupPage();
  await adminDocsGroupsPage.clickOnAddNewGroupButton();
  expect(await adminDocsGroupsPage.isCounterMinValue(0)).toBeTruthy();
  expect(await adminDocsGroupsPage.isCounterMaxValue(200)).toBeTruthy();
});

test('Case #03 Add new Group in Docs Groups @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sideMenuPage = new SideMenuPage(page);
  const adminDocsGroupsPage = new AdminDocsGroupsPage(page);

  await loginPage.loginAsAdmin();

  await sideMenuPage.gotoAdminDocsGroupPage();
  await adminDocsGroupsPage.clickOnAddNewGroupButton();
  await adminDocsGroupsPage.textInputUA(NEW_DOCS_GROUP_NAME_UA);
  await adminDocsGroupsPage.textInputRU(NEW_DOCS_GROUP_NAME_RU);
  expect(await adminDocsGroupsPage.isCounterMinValue(11)).toBeTruthy();
  expect(await adminDocsGroupsPage.isCounterMaxValue(200)).toBeTruthy();
  await adminDocsGroupsPage.clickSaveButton();
  expect(
    await adminDocsGroupsPage.findGroupInGroupList(
      NEW_DOCS_GROUP_NAME_UA,
      NEW_DOCS_GROUP_NAME_RU,
    ),
  ).toBeTruthy();
  expect(await adminDocsGroupsPage.isCounterMinValue(0)).toBeTruthy();
  expect(await adminDocsGroupsPage.isCounterMaxValue(200)).toBeTruthy();
});

test('Case #4 Edit Group in Docs Groups @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sideMenuPage = new SideMenuPage(page);
  const adminDocsGroupsPage = new AdminDocsGroupsPage(page);

  await loginPage.loginAsAdmin();

  await sideMenuPage.gotoAdminDocsGroupPage();
  await adminDocsGroupsPage.clickOnAddNewGroupButton();
  await adminDocsGroupsPage.clickEditGroupButton();
  expect(
    await adminDocsGroupsPage.checkLanguageOfEditedGroupName(),
  ).toBeTruthy();
  expect(await adminDocsGroupsPage.isEditedGroup()).toBeTruthy();
  expect(await adminDocsGroupsPage.checkEditedGroupNameLength()).toBeTruthy();
  expect(
    await adminDocsGroupsPage.isGroupNameLengthBiggerMaxLength(),
  ).toBeFalsy();
});

test('Case #5 Mixed Cases #2, #3, #4 @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sideMenuPage = new SideMenuPage(page);
  const adminDocsGroupsPage = new AdminDocsGroupsPage(page);

  await loginPage.loginAsAdmin();

  await sideMenuPage.gotoAdminDocsGroupPage();
  await adminDocsGroupsPage.clickOnAddNewGroupButton();
  await adminDocsGroupsPage.textInputUA(NEW_DOCS_GROUP_NAME_UA);
  await adminDocsGroupsPage.textInputRU(NEW_DOCS_GROUP_NAME_RU);
  await adminDocsGroupsPage.clickSaveButton();
  expect(await adminDocsGroupsPage.isCounterMinValue(0)).toBeTruthy();
  await adminDocsGroupsPage.clickEditGroupButton();
  await adminDocsGroupsPage.clickSaveButtonAfterEdit();
  expect(await adminDocsGroupsPage.checkEditedGroupNameLength()).toBeTruthy();
  await adminDocsGroupsPage.clickOnAddNewGroupButton();
  expect(await adminDocsGroupsPage.isCounterMinValue(0)).toBeTruthy();
});
