import styled from "styled-components";

const StyledPreviewImage = styled.img`
  width: 5rem;
  height: auto;

  border-radius: 50%;
  justify-self: start;
`;

function PreviewImage() {
  return <StyledPreviewImage src="/Zoomit.jpg" />;
}

export default PreviewImage;
