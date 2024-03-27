import React from "react";
import { IUser } from "../../../data/getDataPromis";
import * as S from "../ItemsCard/ItemsCardStyle";

const random = (max: number) => Math.floor(Math.random() * max);

export const ItemCard: React.FC<{ user: IUser; click: () => void }> = ({
  user,
  click,
}) => {
  const { name, email, sentence, profession, birthday } = user;
  const b = new Date(birthday);
  const src = `https://source.unsplash.com/random/1000x${random(300) + 500}`;

  return (
    <S.ItemsCardWrapper className="card">
      <S.ItemImg src={src} className="card-img-top" alt="" />
      <S.ItemCardTextWrapper className="card-body">
        <S.CompanyName className="card-title">
          {name} ({email})
        </S.CompanyName>
        <S.ItemName className="card-subtitle mb-2 text-muted">
          {profession} birthday: {b.getFullYear()}
        </S.ItemName>
        <S.ItemPrice className="card-text">{sentence}</S.ItemPrice>
        <button className="btn btn-primary" onClick={click}>
          more data...
        </button>
      </S.ItemCardTextWrapper>
    </S.ItemsCardWrapper>
  );
};
