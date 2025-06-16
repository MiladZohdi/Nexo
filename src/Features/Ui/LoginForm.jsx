import { useState } from "react";
import styled from "styled-components";

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

  &.filled label {
    top: -6px;
    left: 8px;
    font-size: 1.2rem;
    background-color: var(--background-color-dark);
    padding: 0 1rem;
    color: var(--text-color-secondry);
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
function LoginForm({ id, placeHolder, maxLength }) {
  const [value, setValue] = useState("");
  return (
    <Form className={`${value ? "filled" : ""}`}>
      <label htmlFor={`${id}`}>{placeHolder}</label>
      <input
        id={`${id}`}
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Next</button>
    </Form>
  );
}

export default LoginForm;
