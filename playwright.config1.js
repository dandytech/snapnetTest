const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",

  retries: 1,

  workers: 3,

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: "html",

  projects: [
    {
      name: "Chrome",

      use: {
        browserName: "chromium",

        // Show browser
        headless: false,

        // Use the actual browser window size
        viewport: null,

        // Maximize Chrome window
        launchOptions: {
          args: ["--start-maximized"],
        },

        // Screenshot when test fails
        screenshot: "only-on-failure",

        // Record video and keep it when test fails
        video: "retain-on-failure",

        // Keep trace when test fails
        trace: "retain-on-failure",

        ignoreHttpsErrors: true,

        permissions: ["geolocation"],
      },
    },
  ],
});
