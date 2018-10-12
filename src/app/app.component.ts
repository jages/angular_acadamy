import { Component } from '@angular/core';
import {Message} from './model/message';
import {User} from './model/user';

@Component({
  selector: 'jc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  messages: Message[];

  constructor() {
    this.message = '';
    this.messages = [];

  }


}




