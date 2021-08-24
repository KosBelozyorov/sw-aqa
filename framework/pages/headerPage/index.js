const {
  SELECT_LANGUAGE_DROPDOWN_BUTTON,
  SELECT_LANGUAGE_UA,
  SELECT_LANGUAGE_RU,
  USER_MENU,
  USER_MENU_PROFILE,
  USER_MENU_LOGOUT,
  USER_MENU_DROPDOWN,
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

  async isUserMenuVisible() {
    const result = await this.page.isVisible(USER_MENU_DROPDOWN);

    return result;
  }

  async gotoUserProfilePage() {
    await Promise.all([
      await this.page.isVisible(USER_MENU_DROPDOWN),
      await this.page.click(USER_MENU_PROFILE),
      await this.page.waitForLoadState('networkidle'),
    ]);
  }

  async logout() {
    await Promise.all([
      await this.page.isVisible(USER_MENU_DROPDOWN),
      await this.page.click(USER_MENU_LOGOUT),
    ]);
  }
}

module.exports = {
  HeaderPage,
};
