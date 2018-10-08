import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../model/chat-message';

@Component({
  selector: 'jc-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent implements OnInit {

  @Input()
  messages: ChatMessage[] = [];

  constructor() { }

  ngOnInit() {
  }

}
