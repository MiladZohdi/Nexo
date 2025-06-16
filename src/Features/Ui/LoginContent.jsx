import styled from "styled-components";
import Header from "./Header";

const StyledLoginContent = styled.div`
  text-align: center;
`;

const LoginParaGraph = styled.p`
  font-size: 1.6rem;
  color: var(--text-color-secondry);
  line-height: 2rem;
`;

function LoginContent({ header, paragraph }) {
  return (
    <StyledLoginContent>
      <Header
        as="h1"
        content={header}
        fontSize="3rem"
        weight="700"
        color="white"
      />
      <LoginParaGraph>{paragraph}</LoginParaGraph>
    </StyledLoginContent>
  );
}

export default LoginContent;
