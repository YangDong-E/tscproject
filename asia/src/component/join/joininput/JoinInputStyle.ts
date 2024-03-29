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
    value !== "" &&
    error !== "" &&
    error !== "멋진 아이디네요 :)" &&
    id !== "storeName" &&
    error !== "사용 가능한 사업자등록번호입니다."
      ? "1px solid var(--color-red)"
      : "1px solid var(--color-grey)"};
  border-radius: 5px;
  background: ${({ icon }) =>
    icon && `url(${icon}) no-repeat right 15px center`};
  padding: 0px 10px;
  outline-color: ${({ error, value, id }) =>
    value !== "" &&
    error !== "" &&
    error !== "멋진 아이디네요 :)" &&
    id !== "storeName" &&
    error !== "사용 가능한 사업자등록번호입니다."
      ? "var(--color-red)"
      : "var(--color-main)"};
`;

const ErrorMessage = styled.p<{ error?: string }>`
  color: ${({ error }) =>
    error !== "멋진 아이디네요 :)" &&
    error !== "사용 가능한 사업자등록번호입니다."
      ? "var(--color-red)"
      : "var(--color-main)"};
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
    error !== ""
      ? "1px solid var(--color-red)"
      : "1px solid var(--color-grey)"};
  outline-color: ${({ error }) =>
    error !== "" ? "var(--color-red)" : "var(--color-main)"};
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
