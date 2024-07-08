import React from "react";
import tab from "../images/tab.jpeg";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";

//import img from "../images/tab.jpeg"

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
