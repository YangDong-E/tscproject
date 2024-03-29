import React from "react";
import * as S from "./ButtonStyle";
import { SVGIcon, SvgIconId } from "../../icon/SVGIcon";

interface CommonBtnProps {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit"; //리터럴 타입
  icon?: string | SvgIconId;
  width?: string;
  color?: string;
  disabled?: boolean;
  paddingLeft?: string;
  marginTop?: string;
}

function CommonBtn({ ...props }: CommonBtnProps) {
  return (
    <S.CommonBtn {...props}>
      {props.icon && <SVGIcon id={props.icon} />}
      {props.children}
    </S.CommonBtn>
  );
}

export { CommonBtn };
