import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { ChatMessageListModule } from './chat-message-list/chat-message-list.module';
import { ChatMessageInputModule } from './chat-message-input/chat-message-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    MainModule,
    ChatMessageListModule,
    ChatMessageInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
