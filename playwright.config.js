/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    browserName: 'chromium',
    channel: 'chromium',
    headless: false,
    viewport: { width: 1920, height: 1080 },
    launchOptions: {
      slowMo: 0,
    },
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  // workers: 1,
  testMatch: ['/test/**/*.test.js'],
  retries: 1, // count of retries of failing test
  reporter: [['list'], ['allure-playwright']],
};

module.exports = config;
