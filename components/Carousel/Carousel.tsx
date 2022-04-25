import React, { useState } from "react";

import {
  CarouselItemStyle,
  CarouselStyle,
} from "../../styles/components/Carousel/carouselStyle";
import ArrowLeft from "../Tools/ArrowLeft";
import ArrowRight from "../Tools/ArrowRight";

interface Props{
width?: string | number,
children?: JSX.Element
}

export const CarouselItem = ({ children, width }:Props) => {
  return (
    <CarouselItemStyle width={width}>
      <div>{children}</div>
    </CarouselItemStyle>
  );
};

const Carousel = ({ children, width }: Props) => {
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
        style={{
          transform: ` translateX(-${activeIndex * Number (width ? width : 40.3)}%)`,
        }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            width: `${width ? width : 40.3}%`,
          });
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
        </div>

        <div
          className="arrow-right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <ArrowRight />

        </div>
      </div>
    </CarouselStyle>
  );
};
export default Carousel;
