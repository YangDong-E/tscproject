import React from "react";
import JoinInputForm from "../../../component/join/joininputform/JoinInputForm";
// import { SVGIcon } from "../../../component/icon/SVGIcon";
import styled from "styled-components";
import { LogoBtn } from "../../../component/common/header/HeaderStyle";
import { useNavigate } from "react-router-dom";

const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  margin-top: 70px;
`;

export default function Join() {
  const navigate = useNavigate();

  // 로고 클릭 함수
  // 로고 클릭시 홈 화면으로 전환되면서 검색창안에 값도 초기화
  const handleHome = () => {
    navigate("/");
  };
  return (
    <JoinWrapper>
      <LogoBtn onClick={handleHome} />
      <JoinInputForm />
    </JoinWrapper>
  );
}
