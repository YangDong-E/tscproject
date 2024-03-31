import React, { useState } from "react";
import { SVGIcon } from "../../icon/SVGIcon";
import * as S from "./PhoneSelectInputStyle";

type PhoneSelectInputProps = {
  selectItems: string[];
  onClick: (selected: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkItem?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  radius?: string;
  padding?: string;
  textAlign?: string;
};

function PhoneSelectInput({
  selectItems,
  onClick,
  onChange,
  checkItem,
  width,
  maxWidth,
  minWidth,
  radius,
  padding,
  textAlign,
}: PhoneSelectInputProps) {
  const [optionToggle, setOptionToggle] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const handleSelectValue = (item: string) => {
    onClick(item);
    setSelectValue(item);
  };

  return (
    <S.PhoneSelectInputWrapper>
      <S.SelectBox>
        <S.SelectInput
          value={selectValue !== "" ? selectValue : selectItems[0]}
        />
      </S.SelectBox>
      {optionToggle === true ? (
        <S.OptionBox>
          {selectItems.map((item, index) => {
            return (
              <li key={index}>
                <button type="button" onClick={() => handleSelectValue(item)}>
                  {item}
                </button>
              </li>
            );
          })}
        </S.OptionBox>
      ) : null}
    </S.PhoneSelectInputWrapper>
  );
}

export { PhoneSelectInput };
