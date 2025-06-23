import styled from "styled-components";
import ChatPreviewLogo from "./ChatPreviewLogo";
import ChatPreviewContentHeader from "./ChatPreviewContentHeader";
import ChatPreviewContentFooter from "./ChatPreviewContentFooter";
import { ChatPreviewContent } from "./ChatPreviewContent";

const ChatPreviewContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  padding: 0.5rem 1rem;
  background-color: inherit;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 6rem 1fr;
  justify-items: center;
  align-items: center;

  color: white;

  &:hover {
    background-color: var(--foucs-color);
    cursor: pointer;
  }
`;

function ChatPreview() {
  return (
    <ChatPreviewContainer>
      <ChatPreviewLogo />
      <ChatPreviewContent>
        <ChatPreviewContentHeader />
        <ChatPreviewContentFooter />
      </ChatPreviewContent>
    </ChatPreviewContainer>
  );
}

export default ChatPreview;
