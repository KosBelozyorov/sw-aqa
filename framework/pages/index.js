const loginPage = require('./loginPage');
const headerPage = require('./headerPage');
const mainPage = require('./mainPage');
const sideMenuPage = require('./sideMenuPage');
const cartPage = require('./cartPage');
const catalogPage = require('./catalogPage');
const ordersPage = require('./ordersPage');
const refundsPage = require('./refundsPage');
const paymentsPage = require('./paymentsPage');
const docsPage = require('./docsPage');
const promosPage = require('./promosPage');
const newsPage = require('./newsPage');
const brandsPage = require('./brandsPage');
const profilePage = require('./profilePage');
const productPage = require('./productPage');
const checkoutPage = require('./checkoutPage');
const adminOrdersPage = require('./adminOrdersPage');
const adminDocsGroupsPage = require('./adminDocsGroupsPage');

module.exports = {
  ...loginPage,
  ...headerPage,
  ...mainPage,
  ...sideMenuPage,
  ...cartPage,
  ...catalogPage,
  ...ordersPage,
  ...refundsPage,
  ...paymentsPage,
  ...docsPage,
  ...promosPage,
  ...newsPage,
  ...brandsPage,
  ...profilePage,
  ...productPage,
  ...checkoutPage,
  ...adminOrdersPage,
  ...adminDocsGroupsPage,
};
