const { PROFILE_PAGE_EMAIL_INPUT, USER_EMAIL } = require('../../constants');

class ProfilePage {
  constructor(page) {
    this.page = page;
  }

  async goToProfilePage() {
    // TODO: should be locate in base PAGE
    await this.page.waitForLoadState('domcontentloaded');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  async isEmailCorrect() {
    await this.page.waitForSelector(PROFILE_PAGE_EMAIL_INPUT);
    const profileEmailInput = await this.page.$(PROFILE_PAGE_EMAIL_INPUT);
    const emailInputValue = await profileEmailInput.inputValue();

    const result = emailInputValue === USER_EMAIL;

    return result;
  }
}

module.exports = {
  ProfilePage,
};
