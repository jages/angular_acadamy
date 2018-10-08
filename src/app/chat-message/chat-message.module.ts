import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessageComponent } from './chat-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatMessageComponent],
  exports: [ChatMessageComponent]
})
export class ChatMessageModule { }
