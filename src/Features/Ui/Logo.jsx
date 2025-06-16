import styled from "styled-components";
import Nexo from "../../assets/Nexo.png";

const StyledLogo = styled.div`
  & img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;

function Logo({ width, height }) {
  return (
    <StyledLogo width={width} height={height}>
      <img src={Nexo} alt="Nexo Logo" />
    </StyledLogo>
  );
}

export default Logo;
