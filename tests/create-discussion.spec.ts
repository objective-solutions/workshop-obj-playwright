import { test } from '@playwright/test';
import { Home } from './page-objects';

test.describe('Create a discussion', async () => {
  let pageHome: Home;

  test.beforeEach(async ({ page }) => {
    pageHome = new Home(page);
  })

  test.fixme('expect create a discussion using sidenav menu', () => {})
})