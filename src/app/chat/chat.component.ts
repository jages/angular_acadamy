import { Component, OnInit } from '@angular/core';
import {Message} from '../model/message';

@Component({
  selector: 'jc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Message[];
  constructor() { }

  ngOnInit() {
    this.messages = [];
  }

  onMessageRecieved(message: Message) {
    this.messages.push(message);
    console.log(message);
  }

}
