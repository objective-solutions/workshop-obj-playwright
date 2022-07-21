import { test } from '@playwright/test';
import { Home } from './page-objects';

test.describe('Create a public Channel', async () => {
  let pageHome: Home;

  test.beforeEach(async ({ page }) => {
    pageHome = new Home(page);
  })

  test.fixme('expect create a public channel', async () => {})
})