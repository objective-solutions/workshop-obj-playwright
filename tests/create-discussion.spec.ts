import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

import { Home } from "./page-objects";

test.describe("Create a discussion", async () => {
  let pageHome: Home;

  test.beforeEach(async ({ page }) => {
    pageHome = new Home(page);
  });

  test("expect create a discussion", async ({ page }) => {
    await page.goto("/");
    await pageHome.createNew("Discussion");

    const discussionName = faker.animal.type() + Date.now();
    const discussionMessage = faker.lorem.words(10);

    await pageHome.modalCreateDiscussion.selectParentChannel.type("sandbox", { delay: 10 });
    await page.keyboard.press("Enter");
    await pageHome.modalCreateDiscussion.inputDiscussionName.type(discussionName);
    await pageHome.modalCreateDiscussion.inputYourMessage.type(discussionMessage);
    await pageHome.modalCreateDiscussion.buttonCreate.click();

    await expect(page).toHaveURL(/\/channel\/[a-z0-9]{0,17}$/i);
  });

  test.skip("Example Test Fail", async ({ page }) => {
    await page.goto("/");
    await pageHome.modalCreateDiscussion.inputYourMessage.type("teste");
  });
});
