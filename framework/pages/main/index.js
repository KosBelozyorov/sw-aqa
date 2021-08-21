const { LoginFragment } = require('./fragments/login');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.LoginFragment = new LoginFragment(page);
  }

  async login(userName, password) {
    // TODO: need refactoring
    await this.LoginFragment.login(userName, password);
  }
}

module.exports = { LoginPage };
