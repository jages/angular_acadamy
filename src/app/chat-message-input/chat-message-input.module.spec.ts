import { ChatMessageInputModule } from './chat-message-input.module';

describe('ChatMessageInputModule', () => {
  let chatMessageInputModule: ChatMessageInputModule;

  beforeEach(() => {
    chatMessageInputModule = new ChatMessageInputModule();
  });

  it('should create an instance', () => {
    expect(chatMessageInputModule).toBeTruthy();
  });
});
