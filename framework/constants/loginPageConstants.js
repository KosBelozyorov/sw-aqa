// Page urls
const DEV_LOGIN_PAGE_URL = 'https://b2b-dev2.sanwell.biz/login';

//Credentials
const USER_CREDENTIALS = {
  email: 'belozerov_kos@ukr.net',
  password: 'Qwerty123!',
};
const ADMIN_CREDENTIALS = {
  email: 'BielozorovKS@sanwell.biz',
  password: 'Qwerty123!',
};

const ADMIN_EMAIL = ADMIN_CREDENTIALS.email;
const ADMIN_PASSWORD = ADMIN_CREDENTIALS.password;

const USER_EMAIL = USER_CREDENTIALS.email;
const USER_PASSWORD = USER_CREDENTIALS.password;

// Selectors
const LOGIN_FORM_EMAIL = '#loginform-email';
const LOGIN_FORM_PASSWORD = '#loginform-password';
const LOGIN_FORM_BUTTON =
  '#loginform > div.form-group.text-center.m-t-20 > div > button';

module.exports = {
  DEV_LOGIN_PAGE_URL,
  USER_EMAIL,
  USER_PASSWORD,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  LOGIN_FORM_EMAIL,
  LOGIN_FORM_PASSWORD,
  LOGIN_FORM_BUTTON,
};
