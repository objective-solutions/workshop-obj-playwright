import { Page } from '@playwright/test'

export class ModalCreateDiscussion {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get selectParentChannel() {
    return this.page.locator('');
  }

  get inputDiscussionName() {
    return this.page.locator('');
  }

  get inputYourMessage() {
    return this.page.locator('');
  }

  get buttonCreate() {
    return this.page.locator('');
  }
}