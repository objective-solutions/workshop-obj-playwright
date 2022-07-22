import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { Home } from './page-objects';

test.describe('Create a Channel', async () => {
  let pageHome: Home;

  test.beforeEach(async ({ page }) => {
    pageHome = new Home(page);
  })
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await pageHome.createNew('Channel');
  })

  test('expect create a public channel', async ({ page }) => {
    const channelName = faker.color.human() + Date.now();

    await pageHome.modalCreateChannel.inputName.type(channelName);
    await pageHome.modalCreateChannel.checkboxPrivate.click();
    await pageHome.modalCreateChannel.buttonCreate.click();

    await expect(page).toHaveURL(`/channel/${channelName}`);
  })

  test('expect create a private channel', async ({ page }) => {
    const channelName = faker.color.human() + Date.now();

    await pageHome.modalCreateChannel.inputName.type(channelName);
    await pageHome.modalCreateChannel.buttonCreate.click();

    await expect(page).toHaveURL(`/group/${channelName}`);
  })
})