import Image from "next/image";
import React, { useState } from "react";
import Back from "../../public/assets/svgs/back.svg";
import Forward from "../../public/assets/svgs/foward.svg";

import {
  CarouselItemStyle,
  CarouselStyle,
} from "../../styles/components/Carousel/carouselStyle";
import ArrowLeft from "../Tools/ArrowLeft";
import ArrowRight from "../Tools/ArrowRight";

export const CarouselItem = ({ children, width }) => {
  return (
    <CarouselItemStyle width={width}>
      <div>{children}</div>
    </CarouselItemStyle>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <CarouselStyle>
      <div
        className="inner"
        style={{ transform: ` translateX(-${activeIndex * 40.3}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "40.3%" });
        })}
      </div>

      <div className="arrows">
        <div
          className="arrow-left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <ArrowLeft />
          {/* <Image src={Back} alt="back" width={63} /> */}
        </div>

        <div
          className="arrow-right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <ArrowRight />

          {/* <Image src={Forward} alt="forward" width={73} /> */}
        </div>
      </div>
    </CarouselStyle>
  );
};
export default Carousel;
