import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessageListComponent } from './chat-message-list.component';
import { ChatMessageModule } from '../chat-message/chat-message.module';

@NgModule({
  imports: [
    CommonModule,
    ChatMessageModule
  ],
  declarations: [ChatMessageListComponent],
  exports: [ChatMessageListComponent]
})
export class ChatMessageListModule { }
