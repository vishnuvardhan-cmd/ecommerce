import React, { useState } from "react";
import HomeSectionCard from "../homesectioncard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Mens_Kurta } from "../../../data/mens_kurta";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    720: { items: 3 },
    1024: { items: 5},
  };

  const items = Mens_Kurta.slice(0, 10).map((item) => (
    <HomeSectionCard product={item} />
  ));



  return (
    <div className="border">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          autoPlay
          autoPlayInterval={1000}
          infinite
        />
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
