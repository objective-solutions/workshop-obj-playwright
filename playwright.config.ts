require('dotenv').config()

import { PlaywrightTestConfig } from '@playwright/test';

export default {
  globalSetup: require.resolve('./tests/config/global-setup'),
  workers: 1,
  testDir: 'tests',
  reporter: 'list',
  outputDir: 'tests-failures',
  use: {
    viewport: { width: 1368, height: 768 },
    trace: 'retain-on-failure',
    baseURL: process.env.APP_URL,
    storageState: 'session.json',
    browserName: 'chromium'
  }
} as PlaywrightTestConfig