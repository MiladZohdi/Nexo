import styled from "styled-components";

const StyledChatPreviewLogo = styled.img`
  width: 5rem;
  height: auto;

  border-radius: 50%;
  justify-self: start;
`;

function ChatPreviewLogo() {
  return <StyledChatPreviewLogo src="/Zoomit.jpg" />;
}

export default ChatPreviewLogo;
