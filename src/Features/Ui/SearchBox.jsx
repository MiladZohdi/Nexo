import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;

  &:focus-within svg {
    color: var(--foucs-color);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 20px;
  background-color: #373737;
  outline: none;

  font-size: 1.4rem;
  color: white;

  &:focus {
    outline: 2px solid var(--foucs-color);
  }
`;

const Icon = styled(IoIosSearch)`
  width: 2.4rem;
  height: 2.4rem;
  color: #aaa;
`;

function SearchBox() {
  return (
    <Form>
      <Label htmlFor="search">
        <Icon />
      </Label>
      <Input placeholder="Search" id="search" />
    </Form>
  );
}

export default SearchBox;
