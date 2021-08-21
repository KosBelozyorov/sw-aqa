/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    browserName: 'chromium',
    channel: 'chromium',
    headless: false,
    viewport: { width: 1920, height: 1080 },
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  retries: 0, // count of retries of failing test
};

export default config;
