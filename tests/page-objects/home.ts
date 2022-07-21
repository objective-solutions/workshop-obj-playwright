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

  get lastMessage() {
    return ''
  }

  get lastMessageNotSequential() {
    return ''
  }

  async sendMessage() {}

  async openChat() {}
}