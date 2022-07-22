import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { Home } from './page-objects';

test.describe.only('Create a discussion', async () => {
  let pageHome: Home;

  test.beforeEach(async ({ page }) => {
    pageHome = new Home(page);
  })

  test.beforeEach(async ({ page }) => {
    page.goto('/')
    await pageHome.createNew('Discussion');
  })

  test('expect create a discussion', async ({ page }) => {
    const discussionName = faker.animal.type() + Date.now()
    const discussionMessage = faker.lorem.words(10)

    await pageHome.modalCreateDiscussion.selectParentChannel.type('sandbox', { delay: 10 });
    await page.keyboard.press('Enter');
    await pageHome.modalCreateDiscussion.inputDiscussionName.type(discussionName)
    await pageHome.modalCreateDiscussion.inputYourMessage.type(discussionMessage)
    await pageHome.modalCreateDiscussion.buttonCreate.click();

    await expect(page).toHaveURL(/\/channel\/[a-z0-9]{0,17}$/i);
  })
})