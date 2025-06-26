import { useState } from "react";
import styled from "styled-components";
import InputUserData from "./InputUserData";

const Form = styled.form`
  position: relative;
  width: 100%;

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

  & button:hover {
    cursor: pointer;
    background-color: #976fff;
  }
`;
function LoginForm({ id, placeHolder, maxLength, pattern, onSubmit }) {
  const [value, setValue] = useState("");
  return (
    <Form onSubmit={onSubmit}>
      <InputUserData
        id={id}
        placeHolder={placeHolder}
        maxLength={maxLength}
        pattern={pattern}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        labelBackground="var(--background-color-dark)"
      />
      <button>Next</button>
    </Form>
  );
}

export default LoginForm;
