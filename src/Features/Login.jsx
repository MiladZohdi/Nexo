import styled from "styled-components";
import Nexo from "../assets/Nexo.png";

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

const Logo = styled.div`
  & img {
    width: 16rem;
    height: 16rem;
  }
`;

const Header = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const LoginContent = styled.div`
  text-align: center;
`;

const LoginParaGraph = styled.p`
  font-size: 1.6rem;
  color: var(--text-color-secondry);
  line-height: 2rem;
`;

const Form = styled.form`
  position: relative;
  width: 100%;

  & label {
    position: absolute;
    top: 15px;
    left: 15px;
    color: var(--text-color-secondry);
    font-size: 1.6rem;
    background-color: inherit;
    transition: all 0.2s;
  }
  & input {
    width: 100%;
    height: 5rem;
    padding: 1.3rem 2rem;
    border-radius: 9px;
    font-size: 1.6rem;
    background-color: transparent;
    border: none;
    border: 1px solid var(--text-color-secondry);
    color: white;
    outline: none;
  }

  & button {
    width: 100%;
    height: 5rem;
    background-color: var(--foucs-color);
    border-radius: 9px;
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
    border: none;
    margin-top: 3rem;
    transition: all 0.2s;
  }

  & label:hover {
    cursor: text;
  }

  & button:hover {
    cursor: pointer;
    background-color: #976fff;
  }

  &:focus-within input {
    border-color: var(--foucs-color);
  }

  &:focus-within label {
    top: -6px;
    left: 8px;
    font-size: 1.2rem;
    background-color: var(--background-color-dark);
    padding: 0 1rem;
    color: var(--foucs-color);
  }
`;

function Login() {
  return (
    <LoginPage>
      <LoginContainer>
        <Logo>
          <img src={Nexo} alt="Telegram Logo" />
        </Logo>
        <LoginContent>
          <Header>Nexo</Header>
          <LoginParaGraph>
            Please confirm your country code and enter your phone number.
          </LoginParaGraph>
        </LoginContent>
        <Form>
          <label htmlFor="#phoneInput">Your Phone Number</label>
          <input id="#phoneInput" />
          <button>Next</button>
        </Form>
      </LoginContainer>
    </LoginPage>
  );
}

export default Login;
