import React from "react";
import * as S from "../ItemsCard/ItemsCardStyle";
import { useNavigate } from "react-router-dom";
import { CartItemType } from "../../ItemCardList/ItemCardList";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const ItemsCard: React.FC<Props> = ({ item, handleAddToCart }) => {
  const navigate = useNavigate();

  return (
    // <S.ExampleItems>
    //   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function () {
    //     return (
    //       <S.ItemsCardWrapper>
    //         <S.ItemImg>
    //           <div>사진</div>
    //         </S.ItemImg>
    //         <S.ItemCardTextWrapper>
    //           <S.CompanyName>회사명</S.CompanyName>
    //           <S.ItemName>제품명</S.ItemName>
    //           <S.ItemPrice>가격</S.ItemPrice>
    //         </S.ItemCardTextWrapper>
    //       </S.ItemsCardWrapper>
    //     );
    //   })}
    // </S.ExampleItems>
    <S.ItemsCardWrapper>
      <S.ItemImg>
        <div>사진</div>
      </S.ItemImg>
      <S.ItemCardTextWrapper>
        <S.CompanyName>{item.title}</S.CompanyName>
        <S.ItemName>{item.description}</S.ItemName>
        <S.ItemPrice>{item.price}</S.ItemPrice>
      </S.ItemCardTextWrapper>
    </S.ItemsCardWrapper>
  );
};

export default ItemsCard;
