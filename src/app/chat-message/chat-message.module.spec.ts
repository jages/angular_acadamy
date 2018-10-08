import { ChatMessageModule } from './chat-message.module';

describe('ChatMessageModule', () => {
  let chatMessageModule: ChatMessageModule;

  beforeEach(() => {
    chatMessageModule = new ChatMessageModule();
  });

  it('should create an instance', () => {
    expect(chatMessageModule).toBeTruthy();
  });
});
