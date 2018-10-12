import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Message} from '../model/message';

@Component({
  selector: 'jc-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() chatmessage: Message;
  constructor() { }


  ngOnInit() {
  }

}
