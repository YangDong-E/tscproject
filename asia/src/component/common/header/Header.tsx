import React, { useState } from "react";
import * as S from "../header/HeaderStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // 검색창에 들어갈 요소
  const [searchContent, setSearchContent] = useState("");
  //검색창
  // onChange에 마우스를 올려보면 e 객체의 타입을 React.ChangeEvent<HTMLInputElement>로 지정해서 구현하라고 나타난다.
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  };

  //검색창 검색 버튼 함수
  // 추후 클릭시 넘어갈 페이지 만들예정
  const handleSearch = () => {
    if (searchContent !== "") {
      navigate("/search", { state: searchContent });
    }
  };

  // 로고 클릭 함수
  // 로고 클릭시 홈 화면으로 전환되면서 검색창안에 값도 초기화
  const handleHome = () => {
    if (searchContent !== "") {
      navigate("/");
      setSearchContent("");
    }
  };

  return (
    <S.HeaderWrapper>
      <S.SearchWrapper>
        <S.LogoBtn onClick={handleHome} />
        <S.SearchInput
          type="text"
          onChange={onChangeSearch}
          placeholder="원하시는 제품을 검색해주세요."
          value={searchContent}
        />
        <S.SearchBtn type="button" onClick={handleSearch} />
      </S.SearchWrapper>
      <S.UserWrapper>
        <S.IconWrapper>
          <S.IconTxt>장바구니</S.IconTxt>
        </S.IconWrapper>
        <S.IconWrapper
          onClick={() => {
            navigate("/account/login");
          }}
        >
          <S.IconTxt>로그인</S.IconTxt>
        </S.IconWrapper>
      </S.UserWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
