import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../model/message';
import {User} from '../model/user';

@Component({
  selector: 'jc-chat-user-input',
  templateUrl: './chat-user-input.component.html',
  styleUrls: ['./chat-user-input.component.scss']
})
export class ChatUserInputComponent implements OnInit {

  message: string;
  leftUser: User;
  rightUser: User;


  @Output() ChatMessage = new EventEmitter<Message>();
  constructor() { }

  ngOnInit() {
    this.leftUser = new User('Lord Vader');
    this.rightUser = new User('You');
  }

  clickButton() {
    this.ChatMessage.emit(new Message(this.message, 'right', this.rightUser.name));
    this.message = '';
  }

  rightClickbutton() {
    this.ChatMessage.emit(new Message(this.message, 'left', this.leftUser.name));
    this.message = '';

    return false;
  }
}
