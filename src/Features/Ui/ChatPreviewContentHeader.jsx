import styled from "styled-components";
import Header from "./Header";

const StyledChatPreviewContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &p {
    font-size: 1.4rem;
  }
`;

function ChatPreviewContentHeader() {
  return (
    <StyledChatPreviewContentHeader>
      <h3>Zoomit</h3>
      <p>4:22 PM</p>
    </StyledChatPreviewContentHeader>
  );
}

export default ChatPreviewContentHeader;
