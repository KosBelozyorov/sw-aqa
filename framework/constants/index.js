const loginPageConstants = require('./loginPageConstants');
const commonConstants = require('./common');
const headerPageConstants = require('./headerPageConstants');
const mainPageConstants = require('./mainPageConstants');
const catalogPageConstants = require('./catalogPageConstants');
const ordersPageConstants = require('./ordersPageConstants');
const refundsPageConstants = require('./refundsPageConstants');
const paymentsPageConstants = require('./paymentsPageConstants');
const docsPageConstants = require('./docsPageConstants');
const newsPageConstants = require('./newsPageConstants');
const brandsPageConstants = require('./brandsPageConstants');
const profilePageConstants = require('./profilePageConstants');
const checkoutPageConstants = require('./checkoutPageConstants');
const productPageConstants = require('./productPageConstants');
const adminOrdersPageConstants = require('./adminOrdersPageConstants');
const adminDocsGroupsPageConstants = require('./adminDocsGroupsPageConstants');

module.exports = {
  ...loginPageConstants,
  ...commonConstants,
  ...headerPageConstants,
  ...mainPageConstants,
  ...catalogPageConstants,
  ...ordersPageConstants,
  ...refundsPageConstants,
  ...paymentsPageConstants,
  ...docsPageConstants,
  ...newsPageConstants,
  ...brandsPageConstants,
  ...profilePageConstants,
  ...checkoutPageConstants,
  ...productPageConstants,
  ...adminOrdersPageConstants,
  ...adminDocsGroupsPageConstants,
};
