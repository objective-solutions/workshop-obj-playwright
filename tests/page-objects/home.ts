import { Page } from '@playwright/test'
import { ModalCreateChannel, ModalCreateDiscussion } from './fragments'

export class Home {
  private readonly page: Page;

  public readonly modalCreateChannel: ModalCreateChannel;
  public readonly modalCreateDiscussion: ModalCreateDiscussion;

  constructor(page: Page) {
    this.page = page;
    this.modalCreateChannel = new ModalCreateChannel(page);
    this.modalCreateDiscussion = new ModalCreateDiscussion(page);
  }

  async openChat(name: string) {
    await this.page.locator('[data-qa="sidebar-search"]').click();
		await this.page.locator('[data-qa="sidebar-search-input"]').type(name);
		await this.page.locator('[data-qa="sidebar-item-title"]', { hasText: name }).first().click();
  }

  async createNew(optionText: string) {
    await this.page.locator('[data-qa="sidebar-create"]').click();
    await this.page.locator(`li.rcx-option >> text="${optionText}"`).click();
  }

  async sendMessage() {
  }
}