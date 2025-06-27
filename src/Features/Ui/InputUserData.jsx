import styled from "styled-components";

const Input = styled.div`
  position: relative;

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
    background-color: ${(props) => props.background};
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

  & input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${(props) => props.background || "inherit"}
      inset !important;
    -webkit-text-fill-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus-within input {
    border-color: var(--foucs-color);
  }

  &:focus-within label {
    top: -6px;
    left: 8px;
    font-size: 1.2rem;
    background-color: ${(props) => props.background};
    padding: 0 1rem;
    color: var(--foucs-color);
  }

  & label:hover {
    cursor: text;
  }
`;

function InputUserData({
  id,
  placeHolder,
  maxLength,
  pattern,
  onChange,
  value,
  labelBackground,
}) {
  return (
    <Input className={`${value ? "filled" : ""}`} background={labelBackground}>
      <label htmlFor={`${id}`}>{placeHolder}</label>
      <input
        id={`${id}`}
        maxLength={maxLength}
        pattern={pattern}
        onChange={onChange}
      />
    </Input>
  );
}

export default InputUserData;
