import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const imgitems = mainCarouselData.map((d) => (
    <img src={d.image} className="cursor-pointer" role="presentation" alt="" />
  ));

  return (
    <AliceCarousel
      items={imgitems}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
