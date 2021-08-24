const {
  SELECT_LANGUAGE_DROPDOWN_BUTTON,
  SELECT_LANGUAGE_UA,
  SELECT_LANGUAGE_RU,
  USER_MENU,
  USER_MENU_PROFILE,
  USER_MENU_LOGOUT,
} = require('../../constants');

class HeaderPage {
  constructor(page) {
    this.page = page;
  }

  async changeLanguage(lang) {
    await this.page.click(SELECT_LANGUAGE_DROPDOWN_BUTTON);

    if (lang === 'UA') {
      this.page.click(SELECT_LANGUAGE_UA);
      await this.page.waitForLoadState('networkidle');
    }

    if (lang === 'RU') {
      this.page.click(SELECT_LANGUAGE_RU);
      await this.page.waitForLoadState('networkidle');
    }
  }

  async clickUserMenu() {
    await this.page.click(USER_MENU);
  }

  async gotoUserProfilePage() {
    await this.page.isVisible('.dropdown-user');
    await this.page.click(USER_MENU_PROFILE);
  }

  async logout() {
    await this.page.isVisible('.dropdown-user');
    await this.page.click(USER_MENU_LOGOUT);
  }
}

module.exports = {
  HeaderPage,
};
