import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import sample1 from "../assets/carouselimg/sample1.png";
import sample2 from "../assets/carouselimg/sample2.png";
import sample3 from "../assets/carouselimg/sample3.png";

export default function CarouselBox() {
  return (
    <Carousel>
      <CarouselItem>
        <img className="slidercontents" src={sample1} alt="First slide" />
      </CarouselItem>
      <CarouselItem>
        <img className="slidercontents" src={sample2} alt="First slide" />
      </CarouselItem>
      <CarouselItem>
        <img className="slidercontents" src={sample3} alt="First slide" />
      </CarouselItem>
    </Carousel>
  );
}
