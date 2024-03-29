import React from "react";
import JoinInputForm from "../../../component/join/joininputform/JoinInputForm";
import { SVGIcon } from "../../../component/icon/SVGIcon";
import styled from "styled-components";

const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  margin-top: 70px;
`;

export default function Join() {
  return (
    <JoinWrapper>
      <SVGIcon id="logo-asia" width="238px" height="80px" />
      <JoinInputForm />
    </JoinWrapper>
  );
}
