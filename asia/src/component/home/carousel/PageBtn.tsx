import React from "react";
import styled from "styled-components";
import swiper1 from "../../../asset/icon/icon-swiper-1.png";
import swiper2 from "../../../asset/icon/icon-swiper-2.png";

interface PageBtnProps {
  direction: string;
  moveSlide: () => void;
}

const PageBtnWrapper = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => (direction === "prev" ? "12%" : "85%")};
  background-color: rgb(176, 104, 249, 0.2);
  border-radius: 50%;
  padding: 10px 10px;
  &:hover {
    background-color: rgb(176, 104, 249, 0.4);
    cursor: pointer;
  }
`;

const Pagebutton = styled.button<{ direction: string }>`
  width: 20px;
  height: 20px;
  background: ${({ direction }) =>
    direction === "prev"
      ? `url(${swiper1}) no-repeat`
      : `url(${swiper2}) no-repeat`};
`;

export default function PageBtn({ direction, moveSlide }: PageBtnProps) {
  return (
    <PageBtnWrapper type="button" onClick={moveSlide} direction={direction}>
      {direction === "next" && (
        <Pagebutton type="button" direction={direction}></Pagebutton>
      )}
      {direction === "prev" && (
        <Pagebutton type="button" direction={direction}></Pagebutton>
      )}
    </PageBtnWrapper>
  );
}
