import React from "react";
import * as S from "../ItemsCard/ItemsCardStyle";

const ItemsCard = () => {
  return (
    <S.ExampleItems>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function () {
        return (
          <S.ItemsCardWrapper>
            <S.ItemImg>
              <div>사진</div>
            </S.ItemImg>
            <S.ItemCardTextWrapper>
              <S.CompanyName>회사명</S.CompanyName>
              <S.ItemName>제품명</S.ItemName>
              <S.ItemPrice>가격</S.ItemPrice>
            </S.ItemCardTextWrapper>
          </S.ItemsCardWrapper>
        );
      })}
    </S.ExampleItems>
  );
};

export default ItemsCard;
