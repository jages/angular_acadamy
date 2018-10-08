import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessageInputComponent } from './chat-message-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatMessageInputComponent],
  exports: [ChatMessageInputComponent]
})
export class ChatMessageInputModule { }
