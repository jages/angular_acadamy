import { ChatMessageListModule } from './chat-message-list.module';

describe('ChatMessageListModule', () => {
  let chatMessageListModule: ChatMessageListModule;

  beforeEach(() => {
    chatMessageListModule = new ChatMessageListModule();
  });

  it('should create an instance', () => {
    expect(chatMessageListModule).toBeTruthy();
  });
});
