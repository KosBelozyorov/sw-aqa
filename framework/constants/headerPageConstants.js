// Selectors
const SELECT_LANGUAGE_DROPDOWN_BUTTON = 'button.btn.dropdown-toggle.form-lang';
const SELECT_LANGUAGE_UA = 'a:has-text("UA")';
const SELECT_LANGUAGE_RU = 'a:has-text("RU")';
const SELECTED_LANGUAGE_VALUE =
  'button.btn.dropdown-toggle.form-lang span:nth-of-type(1)';
const USER_MENU = 'a.dropdown-toggle.profile-pic';
const USER_MENU_PROFILE = '.dropdown-user li:nth-child(3) a';
const USER_MENU_LOGOUT = '.dropdown-user li:nth-child(5) a';
const USER_MENU_DROPDOWN = 'ul.dropdown-menu.dropdown-user';

module.exports = {
  SELECT_LANGUAGE_DROPDOWN_BUTTON,
  SELECT_LANGUAGE_UA,
  SELECT_LANGUAGE_RU,
  SELECTED_LANGUAGE_VALUE,
  USER_MENU,
  USER_MENU_PROFILE,
  USER_MENU_LOGOUT,
  USER_MENU_DROPDOWN,
};
