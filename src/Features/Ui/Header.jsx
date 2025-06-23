import styled from "styled-components";

const StyledHeader = styled.div`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontSize};
  padding-bottom: 2rem;
`;

function Header({ content, weight, fontSize, color, as }) {
  return (
    <StyledHeader as={as} color={color} weight={weight} fontSize={fontSize}>
      {content}
    </StyledHeader>
  );
}

export default Header;
