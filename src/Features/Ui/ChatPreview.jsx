import styled from "styled-components";
import PreviewImage from "./PreviewImage";
import PreviewContentHeader from "./PreviewContentHeader";
import ChatPreviewContentFooter from "./ChatPreviewContentFooter";
import { PreviewContent } from "./PreviewContent";

const ListPreviewContainer = styled.div`
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

function ChatPreview({ chat, contact }) {
  return (
    <ListPreviewContainer>
      <PreviewImage />
      <PreviewContent>
        <PreviewContentHeader />
        <ChatPreviewContentFooter />
      </PreviewContent>
    </ListPreviewContainer>
  );
}

export default ChatPreview;
