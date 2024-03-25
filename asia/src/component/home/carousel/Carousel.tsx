import React, { useState, useRef, useEffect } from "react";
import sample1 from "../../../assets/carousel/store.png";
import sample2 from "../../../assets/carousel/cat2.png";
import sample3 from "../../../assets/carousel/cat3.png";
import * as S from "./CarouselStyle";

export const useInterval = (callback, delay) => {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const thumbnail = [sample1, sample2, sample3];

  // 캐러셀 자동 슬라이드
  useInterval(() => {
    if (slideIndex === 2) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }, 3500);

  // 하단 버튼
  const movePage = (index) => {
    setSlideIndex(index);
  };

  return (
    <S.CarouselWrapper>
      <S.CarouselImgWindow>
        {thumbnail.map((item, index) => (
          <S.Carousel
            key={index}
            className={slideIndex === index ? "active" : ""}
            style={
              slideIndex === 3
                ? { transform: "translateX(0px)" }
                : { transform: `translateX(-${slideIndex}00%)` }
            }
          >
            <S.Carouselimg src={item} alt="" />
          </S.Carousel>
        ))}
      </S.CarouselImgWindow>

      <S.IconWrap>
        {Array.from({ length: 3 }).map((item, index) => (
          <S.PageIcon
            key={index}
            onClick={() => movePage(index)}
            className={slideIndex === index ? "icon active" : "icon"}
          />
        ))}
      </S.IconWrap>
    </S.CarouselWrapper>
  );
}
