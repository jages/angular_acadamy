import { Component } from '@angular/core';
import { ChatMessage } from './model/chat-message';

@Component({
  selector: 'jc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private static messageId = 1;

  title = 'Most Epic Jedi Chat';

  messages = [];

  onChatMessageInput(text: string) {
    this.messages = [...this.messages, this.createMessageFromText(text) ];
  }

  private createMessageFromText(text: string): ChatMessage {
    return {
      id: this.nextChatMessageId(),
      content: text,
      position: 'right',
      alert: 'default',
      user: {
        id: 1,
        name: 'Angular Academy'
      }
    };
  }

  private nextChatMessageId(): number {
    return AppComponent.messageId++;
  }
}
