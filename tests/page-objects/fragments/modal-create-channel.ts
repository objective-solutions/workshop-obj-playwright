import { Page } from '@playwright/test'

export class ModalCreateChannel {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // CSS Selector
  // https://www.w3schools.com/cssref/css_selectors.asp
  get inputName() {
		return this.page.locator('#modal-root [placeholder="Channel Name"]');
  }

  // XPath Selector
  // https://www.w3schools.com/xml/xpath_syntax.asp
  get checkboxPrivate() {
    return this.page.locator(
			'//*[@id="modal-root"]//*[contains(@class, "rcx-field") and contains(text(), "Private")]/../following-sibling::label/i',
		);
  }

  // CSS Selector + Playwright Text Selector
  // https://playwright.dev/docs/selectors#text-selector 
  get buttonCreate() {
    return this.page.locator('#modal-root button:has-text("Create")');
  }
}