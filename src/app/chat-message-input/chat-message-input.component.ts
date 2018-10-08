import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'jc-chat-message-input',
  templateUrl: './chat-message-input.component.html',
  styleUrls: ['./chat-message-input.component.scss']
})
export class ChatMessageInputComponent implements OnInit {

  @ViewChild('inputElem')
  inputElement: ElementRef<HTMLInputElement>;

  @Output()
  textChanged: EventEmitter<string> = new EventEmitter<string>(true);

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (event.keyCode === 13) {
      const text = this.inputElement.nativeElement.value;
      this.emitValue(text);
    }
  }

  onButtonClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const text = this.inputElement.nativeElement.value;
    this.emitValue(text);
  }

  private emitValue(t: string) {
    if (!!t) {
      this.textChanged.emit(t);
      this.inputElement.nativeElement.value = '';
    }
  }
}
