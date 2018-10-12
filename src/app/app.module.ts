import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatUserInputComponent } from './chat-user-input/chat-user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatListComponent,
    ChatMessageComponent,
    ChatUserInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
