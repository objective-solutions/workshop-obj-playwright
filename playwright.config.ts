require("dotenv").config();

import { PlaywrightTestConfig, devices } from "@playwright/test";

export default {
  globalSetup: require.resolve("./tests/config/global-setup"),
  workers: 1,
  testDir: "tests",
  reporter: process.env.CI ? "github" : "list",
  outputDir: "tests-failures",
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: "retain-on-failure",
    screenshot: process.env.CI ? "off" : "only-on-failure",
    baseURL: process.env.APP_URL,
    storageState: "session.json",
    headless: false,
  },
  projects: [
    {
      name: "chromium",
      use: devices["Desktop Chrome"],
    },
    {
      name: "firefox",
      use: devices["Desktop Firefox"],
    },
  ],
} as PlaywrightTestConfig;
