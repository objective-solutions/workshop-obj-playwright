import { Page } from '@playwright/test'

export class ModalCreateChannel {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get inputName() {
    return this.page.locator('');
  }

  get inputTopic() {
    return this.page.locator('');
  }

  get checkboxPrivate() {
    return this.page.locator('');
  }

  get buttonCancel() {
    return this.page.locator('');
  }
  
  get buttonCreate() {
    return this.page.locator('');
  }
}