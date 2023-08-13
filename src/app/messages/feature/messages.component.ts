import { Component } from '@angular/core';
import { MessageService } from '../data-access/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}

  public clear() {
    this.messageService.clear();
  }
}
