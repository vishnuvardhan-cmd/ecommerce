import React from "react";
import HomeSectionCard from "../homesectioncard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { HomeSectionCarouselData } from "./HomeSectionCarouselData";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = HomeSectionCarouselData.map((item) => (
    <HomeSectionCard label={item.imageUrl} />
  ));
  return (
    <div className="border border-black">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          infinite
          responsive={responsive}
        />
        <Button
          className="z-50"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(180deg)",
            bgcolor: "white",
          }}
          aira-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ color: "black" }} />
        </Button>
        <Button
          className="z-50"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform:"translate(-50%)",
            bgcolor: "white",
          }}
          aira-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ color: "black" }} />
        </Button>
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
