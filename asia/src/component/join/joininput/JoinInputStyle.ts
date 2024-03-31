import styled from "styled-components";

const CommonInput = styled.div`
  margin: 12px 0;
  button {
    margin-left: 10px;
  }
`;

const LabelText = styled.label`
  font-size: 16px;
  display: block;
  color: #767676;
  margin-bottom: 10px;
`;

const Input = styled.input<{
  width?: string;
  icon?: string;
  error?: string;
  value?: string;
  id?: string;
}>`
  width: ${({ width }) => (width ? width : "480px")};
  height: 54px;
  border: ${({ error, value, id }) =>
    value !== "" && error !== "" && error !== "멋진 아이디네요 :)"
      ? "1px solid red"
      : "1px solid rgb(128,128,128)"};
  border-radius: 5px;
  background: ${({ icon }) =>
    icon && `url(${icon}) no-repeat right 15px center`};
  padding: 0px 10px;
  outline-color: ${({ error, value, id }) =>
    value !== "" && error !== "" && error !== "멋진 아이디네요 :)"
      ? "red"
      : "blue"};
`;

const ErrorMessage = styled.p<{ error?: string }>`
  color: ${({ error }) => (error !== "멋진 아이디네요 :)" ? "red" : "blue")};
  margin-top: 10px;
`;

const PhoneInputWrapper = styled.div`
  margin: 12px 0;
  div {
    display: flex;
    gap: 12px;
  }
`;

const PhoneInput = styled.input<{
  error?: string;
  value2?: string;
  value3?: string;
}>`
  width: 152px;
  height: 54px;
  border-radius: 5px;
  border: ${({ error }) =>
    error !== "" ? "1px solid red" : "1px solid rgb(128,128,128)"};
  outline-color: ${({ error }) => (error !== "" ? "red" : "blue")};
  padding: 0px 10px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export {
  CommonInput,
  LabelText,
  Input,
  ErrorMessage,
  PhoneInputWrapper,
  PhoneInput,
};
