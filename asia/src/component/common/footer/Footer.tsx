import React from "react";
import * as S from "./FooterStyle";
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.TopWrapper>
        <S.FooterList>
          {/* li 안에있는 div 부분은 Link를 사용하여 해당 페이지로 넘어갈 예정 */}
          <li>
            <div>회사 소개</div>
          </li>
          <li>
            <div>이용약관</div>
          </li>
          <li>
            <div>개인정보처리방침</div>
          </li>
        </S.FooterList>
      </S.TopWrapper>
      <S.DownWrapper>
        <S.CompanyName>(주) 아시아전기조명</S.CompanyName>
        <S.CompanyTxt>경기도 이천시 중리동</S.CompanyTxt>
        <S.CompanyTxt>Tel.031-638-5758</S.CompanyTxt>
        <S.CompanyTxt>사업자 번호 : 000-0000-0000|도소매판매업</S.CompanyTxt>
        <S.CompanyTxt>대표 : 강경수</S.CompanyTxt>
      </S.DownWrapper>
    </S.FooterWrapper>
  );
}
