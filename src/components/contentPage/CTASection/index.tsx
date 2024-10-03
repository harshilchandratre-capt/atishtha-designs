import React from "react";
import CarouselMain from "@/components/CarouselMain"; // Adjust the import path based on your file structure

const Call2ActionMain = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Carousel with a dark overlay */}
      <div className="absolute inset-0">
        <CarouselMain />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* CTA Content on top of the carousel */}
    </div>
  );
};

export default Call2ActionMain;
