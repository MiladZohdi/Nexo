import styled from "styled-components";

import Logo from "../Ui/Logo";
import LoginContent from "../Ui/LoginContent";
import LoginForm from "../Ui/LoginForm";

const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color-dark);
`;

const LoginContainer = styled.div`
  width: 40rem;
  height: 100vh;
  padding: 10rem 2.4rem;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  row-gap: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Login() {
  return (
    <LoginPage>
      <LoginContainer>
        <Logo width="16rem" height="16rem" />
        <LoginContent
          header="Nexo"
          paragraph="Please confirm your country code and enter your phone number."
        />
        <LoginForm
          id="phoneValue"
          placeHolder="Your Phone Number"
          maxLength={11}
        />
      </LoginContainer>
    </LoginPage>
  );
}

export default Login;
