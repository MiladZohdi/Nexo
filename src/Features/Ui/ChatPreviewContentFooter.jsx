import styled from "styled-components";
import { NotificationBox } from "./NotificationBox";

const StyledPreviewContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviewMessagePreview = styled.p`
  font-size: 1.3rem;
`;

function PreviewContentFooter() {
  return (
    <StyledPreviewContentFooter>
      <PreviewMessagePreview>
        Hi this is a test message for preview
      </PreviewMessagePreview>

      <NotificationBox>5</NotificationBox>
    </StyledPreviewContentFooter>
  );
}

export default PreviewContentFooter;
