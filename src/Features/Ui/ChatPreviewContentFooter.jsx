import styled from "styled-components";
import { NotificationBox } from "./NotificationBox";

const StyledChatPreviewContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatPreviewMessagePreview = styled.p`
  font-size: 1.3rem;
`;

function ChatPreviewContentFooter() {
  return (
    <StyledChatPreviewContentFooter>
      <ChatPreviewMessagePreview>
        Hi this is a test message for preview
      </ChatPreviewMessagePreview>

      <NotificationBox>5</NotificationBox>
    </StyledChatPreviewContentFooter>
  );
}

export default ChatPreviewContentFooter;
