import React, { useRef } from "react";
import * as S from "./JoinInputStyle";
import { CommonBtn } from "../../common/button/ButtonStyle";
// import { SVGIcon } from '../../icon/SVGIcon';
import { PhoneSelectInput } from "../phoneselectinput/PhoneSelectInput";

//JoinInput에 들어가는 props의 자료형을 정함.
interface CommonInputProps {
  label: string;
  type: string;
  name: string;
  icon?: string;
  width?: string;
  value?: string;
  onClick?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  onButton?: boolean;
}

function CommonInput({
  onClick,
  onChange,
  onButton,
  error,
  value,
  icon,
  ...props
}: CommonInputProps) {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  //버튼이 있는 input에서 클릭 이벤트 함수
  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onClick?.(inputRef.current.value);
  };

  return (
    <S.CommonInput>
      <S.LabelText htmlFor={props.name}>{props.label}</S.LabelText>
      <S.Input
        {...props}
        id={props.name}
        onChange={onChange}
        value={value}
        icon={icon}
        autoComplete="off"
        ref={inputRef}
        error={error}
        required
      />
      {onButton === false || onButton === true ? (
        <CommonBtn onClick={handleBtnClick} disabled={!onButton} width="122px">
          {props.name === "username" ? "중복확인" : "인증"}
        </CommonBtn>
      ) : null}
      {value !== "" && error !== "" ? (
        <S.ErrorMessage error={error}>{error}</S.ErrorMessage>
      ) : null}
    </S.CommonInput>
  );
}

//회원가집 중 PhoneInput에 들어가는 props의 자료형을 정함.
interface PhoneInputProps {
  value1: string;
  value2: string;
  value3: string;
  onClick: (selected: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  maxlength?: string;
}

function PhoneInput({
  onChange,
  onClick,
  value1,
  value2,
  value3,
  error,
  maxlength,
}: PhoneInputProps) {
  const selectItems = ["010", "011", "016", "017", "018", "019"];

  return (
    <S.PhoneInputWrapper>
      <S.LabelText htmlFor="phone">휴대폰번호</S.LabelText>
      <div>
        <PhoneSelectInput
          selectItems={selectItems}
          checkItem={value1}
          onClick={onClick}
        />
        <S.PhoneInput
          name="phone2"
          type="number"
          onChange={onChange}
          value={value2}
          maxLength={Number(4)}
          error={error}
          required
          // autoComplete='off'
        />
        <S.PhoneInput
          name="phone3"
          type="number"
          onChange={onChange}
          value={value3}
          maxLength={Number(4)}
          error={error}
          required
          // autoComplete='off'
        />
      </div>
      {(value2 || value3) && error !== "" ? (
        <S.ErrorMessage error={error}>{error}</S.ErrorMessage>
      ) : null}
    </S.PhoneInputWrapper>
  );
}

//회원가집 중 EmailInput에 들어가는 props의 자료형을 정함.
interface EmailInputProps {
  value1: string;
  value2: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

function EmailInput({ value1, value2, onChange, error }: EmailInputProps) {
  return (
    <div>
      <S.LabelText htmlFor="email">이메일</S.LabelText>
      <S.Input
        id="email"
        type="text"
        name="email1"
        onChange={onChange}
        value={value1}
        autoComplete="off"
        width="218px"
        error={error}
        required
      />
      <span style={{ padding: "0px 12px" }}>@</span>
      <S.Input
        id="email"
        type="text"
        name="email2"
        onChange={onChange}
        value={value2}
        autoComplete="off"
        width="218px"
        error={error}
        required
      />
      {(value1 || value2) && error !== "" ? (
        <S.ErrorMessage>{error}</S.ErrorMessage>
      ) : null}
    </div>
  );
}

export { CommonInput, PhoneInput, EmailInput };
