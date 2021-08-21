const loginPage = require('./loginPage');
const mainPage = require('./mainPage');
const sideMenu = require('./sideMenu');
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

module.exports = {
  ...loginPage,
  ...mainPage,
  ...sideMenu,
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
};
