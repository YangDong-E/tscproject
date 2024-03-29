import styled from "styled-components";

const LoginInput = styled.input`
  display: block;
  width: 480px;
  height: 60px;
  border: 0;
  border-bottom: 1px solid gray;
  outline: 0;
  &:focus {
    border-bottom: 2px solid blue;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const LoginList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  p {
    padding: 0 20px;
    &:first-child {
      border-right: 2px solid rgb(169, 169, 169);
    }
    &:hover {
      color: rgb(169, 169, 169);
      text-decoration: underline;
    }
  }
`;

export { LoginInput, ErrorMessage, LoginList };
