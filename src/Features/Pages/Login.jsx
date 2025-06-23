import styled from "styled-components";

import Logo from "../Ui/Logo";
import LoginContent from "../Ui/LoginContent";
import LoginForm from "../Ui/LoginForm";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { auth } from "../../Services/firebase";

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
  const phoneNumber = "+989922244623";
  function generateRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  }

  function requestOtp(e) {
    e.preventDefault();
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <LoginPage>
      <div id="recaptcha-container" style={{ display: "none" }}></div>
      <LoginContainer>
        <Logo width="16rem" height="16rem" />
        <LoginContent
          header="Nexo"
          paragraph="Please confirm your country code and enter your phone number."
        />
        <LoginForm
          id="phoneValue"
          placeHolder="Your Phone Number"
          pattern="^09\\d{9}$"
          maxLength={11}
          onSubmit={requestOtp}
        />
      </LoginContainer>
    </LoginPage>
  );
}

export default Login;
