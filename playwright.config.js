/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    // browserName: 'webkit',
    // channel: 'webkit',
    // headless: false,
    // viewport: { width: 1920, height: 1080 },
    // launchOptions: {
    //   slowMo: 0,
    // },
    // screenshot: 'on',
    // video: 'retain-on-failure',
    // trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
        // Test against Chrome Beta channel.
        channel: 'chrome',
        viewport: { width: 1920, height: 1080 },
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1920, height: 1080 },
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        browserName: 'firefox',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      },
      viewport: { width: 1920, height: 1080 },
    },
  ],

  // workers: 1,
  testMatch: ['/test/**/*.test.js'],
  retries: 1, // count of retries of failing test
  reporter: [['list'], ['allure-playwright']],
};

module.exports = config;
