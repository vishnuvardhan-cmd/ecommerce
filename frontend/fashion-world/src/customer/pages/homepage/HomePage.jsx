import React from "react";
import MainCarousel from "../../components/homecarousel/MainCarousel";
import HomeSectionCard from "../../components/homesectioncard/HomeSectionCard";
import HomeSectionCarousel from "../../components/homesectioncarousel/HomeSectionCarousel";

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
}

export default HomePage;
