import { Page } from '@playwright/test'

export class ModalCreateDiscussion {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get selectParentChannel() {
    return this.page.locator('.rcx-field-group__item:nth-child(2) input');
  }

  get inputDiscussionName() {
    return this.page.locator('.rcx-field-group__item:nth-child(4) input');
  }

  get inputYourMessage() {
    return this.page.locator('.rcx-field-group__item:nth-child(6) textarea');
  }

  get buttonCreate() {
    return this.page.locator('#modal-root button:has-text("Create")');
  }
}