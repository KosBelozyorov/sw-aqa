const {
  LOGIN_FORM_EMAIL,
  LOGIN_FORM_PASSWORD,
  LOGIN_FORM_BUTTON,
} = require('../../../constants');

class LoginFragment {
  constructor(page) {
    this.page = page;
  }

  async login(userName, password) {
    // TODO: need refactoring
    await this.page.click(LOGIN_FORM_EMAIL);
    await this.page.fill(LOGIN_FORM_EMAIL, userName);
    await this.page.fill(LOGIN_FORM_PASSWORD, password);
    await this.page.click(LOGIN_FORM_BUTTON);
  }
}

module.exports = {
  LoginFragment,
};
