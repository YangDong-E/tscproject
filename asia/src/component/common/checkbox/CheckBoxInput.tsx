import React from "react";
import * as S from "./CheckBoxInputStyle";
// import { SVGIcon } from '../../icon/SVGIcon';

interface CheckBoxInputProps {
  children: React.ReactNode;
  color?: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckBoxInput({ checked, onChange }: CheckBoxInputProps) {
  return (
    <S.CheckBoxContainer>
      <S.CheckBox checked={checked} onChange={onChange} />
    </S.CheckBoxContainer>
  );
}

export { CheckBoxInput };
