require('dotenv').config()

import { PlaywrightTestConfig } from '@playwright/test';

export default {
  globalSetup: require.resolve('./tests/config/global-setup'),
  workers: 1,
  testDir: 'tests',
  reporter: 'list',
  outputDir: 'test-failures',
  use: {
    viewport: { width: 1368, height: 768 },
    baseURL: process.env.APP_URL,
    storageState: 'session.json',
    browserName: 'chromium'
  }
} as PlaywrightTestConfig