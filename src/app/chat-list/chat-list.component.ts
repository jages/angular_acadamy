import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../model/message';

@Component({
  selector: 'jc-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  @Input() messages: Message[];
  constructor() { }

  ngOnInit() {
  }

}
