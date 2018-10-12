export class Message {
  constructor(message: string, alignment: string, user: string) {
    this.text = message;
    this.alignment = alignment;
    this.from = user;
  }
  text: string;
  alignment: string;
  from: string;
}
