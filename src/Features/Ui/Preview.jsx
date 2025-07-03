import styled from "styled-components";
import PreviewImage from "./PreviewImage";
import PreviewContentHeader from "./PreviewContentHeader";
import PreviewContentFooter from "./PreviewContentFooter";
import { PreviewContent } from "./PreviewContent";

const StyledChatPreviewContainer = styled.div`
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

function Preview({ type }) {
  return (
    <StyledChatPreviewContainer>
      <PreviewImage />
      <PreviewContent>
        <PreviewContentHeader type={type} />
        <PreviewContentFooter type={type} />
      </PreviewContent>
    </StyledChatPreviewContainer>
  );
}

export default Preview;
