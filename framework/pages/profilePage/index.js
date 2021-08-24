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
}

module.exports = {
  ProfilePage,
};
