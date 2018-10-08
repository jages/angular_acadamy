import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ChatMessage } from '../model/chat-message';

@Component({
  selector: 'jc-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @HostBinding('class.left')
  get isLeft(): boolean {
    return this.message && this.message.position === 'left';
  }

  @HostBinding('class.right')
  get isRight(): boolean {
    return this.message && this.message.position === 'right';
  }

  @HostBinding('class.center')
  get isCenter(): boolean {
    return this.message && this.message.position === 'center';
  }

  @Input()
  message: ChatMessage;

  constructor() { }

  ngOnInit() {
  }

}
