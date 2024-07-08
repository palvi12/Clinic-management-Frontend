import React from "react";
import tab from "../images/jh.jpg";

const CarouselImage = ({ text }) => {
  return (
    <div className="carousel-image-container">
      {/* Replace this with your actual image */}
      <img src={tab} alt={text} className="img-fluid" />
      <p>{text}</p>
    </div>
  );
};

export default CarouselImage;
