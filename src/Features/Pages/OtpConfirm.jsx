import styled from "styled-components";
import Logo from "../Ui/Logo";
import LoginContent from "../Ui/LoginContent";
import LoginForm from "../Ui/LoginForm";

const StyledOtpConfirm = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color-dark);
`;

const OtpContainer = styled.div`
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

function OtpConfirm() {
  return (
    <StyledOtpConfirm>
      <OtpContainer>
        <Logo width="16rem" height="16rem" />
        <LoginContent
          header="Nexo"
          paragraph="We've sent the code to your phone."
        />
        <LoginForm id="otp" placeHolder="OTP-Code" maxLength={6} />
      </OtpContainer>
    </StyledOtpConfirm>
  );
}

export default OtpConfirm;
