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
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
    trace: 'retain-on-failure',
  },
  testMatch: ['*.test.js'],
  retries: 1, // count of retries of failing test
  reporter: [['list'], ['experimental-allure-playwright']],
};

module.exports = config;
