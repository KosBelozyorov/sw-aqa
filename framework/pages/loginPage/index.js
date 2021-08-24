const { LoginFragment } = require('./fragments/login');
const {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  USER_EMAIL,
  USER_PASSWORD,
} = require('../../constants');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.LoginFragment = new LoginFragment(page);
  }

  async loginAsUser() {
    // TODO: need refactoring
    await this.LoginFragment.login(USER_EMAIL, USER_PASSWORD);
  }

  async loginAsAdmin() {
    // TODO: need refactoring
    await this.LoginFragment.login(ADMIN_EMAIL, ADMIN_PASSWORD);
  }

  async gotoLoginPage() {
    const result = await this.LoginFragment.gotoLoginPage();

    return result;
  }
}

module.exports = { LoginPage };
