import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    800: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActiveIndex(activeIndex - 1);
      console.log(activeIndex);
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActiveIndex(activeIndex + 1);
      console.log(activeIndex);
    }
  };

  const items = data.map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));
  return (
    <div className="shadow-lg  bg-white">
      <h1 className="text-2xl font-semibold p-5">{sectionName}</h1>
      <div className="relative pb-5 ml-10">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          activeIndex={activeIndex}
        />

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-2rem",
              transform: "translateX(-50%) rotate(90deg)",
            }}
          >
            <KeyboardArrowLeftIcon
              fontSize="large"
              sx={{ transform: "rotate(-90deg)" }}
            />
          </Button>
        )}

        {activeIndex < items.length - 5 && (
          <Button
            onClick={slideNext}
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "1rem",
              transform: "translateX(50%) rotate(-90deg)",
            }}
          >
            <KeyboardArrowLeftIcon
              fontSize="large"
              sx={{ transform: "rotate(-90deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
