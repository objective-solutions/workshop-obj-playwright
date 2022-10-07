import { chromium } from "@playwright/test";

export default async function () {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(process.env.APP_URL as string);
  await page.locator("[name=emailOrUsername]").type(process.env.TEST_USERNAME as string);
  await page.locator("[name=pass]").type(process.env.TEST_PASSWORD as string);
  await page.locator(".login").click();
  await page.waitForSelector('text="Welcome to Rocket.Chat"');

  await page.context().storageState({ path: "session.json" });
  await browser.close();
}
