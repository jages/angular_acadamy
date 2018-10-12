import { Component } from '@angular/core';

@Component({
  selector: 'jc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  messages: Message[];
  leftUser: User;
  rightUser: User;

  constructor() {
    this.message = '';
    this.messages = [];
    this.leftUser = new User('Lord Vader');
    this.rightUser = new User('You');
  }

  clickButton() {
    this.messages.push(new Message(this.message, 'right', this.rightUser.name));
    this.message = '';
  }

  rightClickbutton() {
    this.messages.push(new Message(this.message, 'left', this.leftUser.name));
    this.message = '';

    return false;
  }
}

class Message {
  constructor(message: string, alignment: string, user: string) {
    this.text = message;
    this.alignment = alignment;
    this.from = user;
  }
  text: string;
  alignment: string;
  from: string;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}
