import styled from "styled-components";

const Carouselimg = styled.img`
  width: 1000px;
  height: 500px;
`;

const CarouselImgWindow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 1000px;
  height: 500px;
  overflow: hidden;
  margin: 20px auto;
`;

const Carousel = styled.div``;

const PageIcon = styled.div`
  display: inline-block;
  margin: 4px;
  width: 8px;
  height: 8px;
  background-color: black;
  box-shadow: 1px 1px 2px var(--black);
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in 0.4s;
  &.icon {
    opacity: 0.4;
  }
  &.icon.active {
    opacity: 0.8;
  }
`;

const IconWrap = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  display: inline-block;
  bottom: -5%;
  left: 50%;
`;

const CarouselWrapper = styled.div`
  position: relative;
  box-shadow: inset 0px -4px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 0px;
`;

export {
  Carouselimg,
  CarouselImgWindow,
  Carousel,
  PageIcon,
  IconWrap,
  CarouselWrapper,
};
