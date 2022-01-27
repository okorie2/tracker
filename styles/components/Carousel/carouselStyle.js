import styled from "styled-components";
import { Theme } from "../../theme/theme";

export const CarouselStyle = styled.div`
  overflow: hidden;
  padding-top: 7%;
  margin-left: 5%;
  width: 91%;
  margin: auto;
  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  .carouselsvg:hover .arr {
    fill: ${({ theme }) => theme.white};
  }
  .carouselsvg:hover .arr-circle {
    fill: ${({ theme }) => theme.highlightCol};
    stroke: ${({ theme }) => theme.white};
  }

  .indicators {
    display: flex;
    justify-content: center;
  }
  .indicators > button {
    margin: 5px;
  }
  .arrows {
    padding: 2% 0;
    display: grid;
    grid-template-columns: 76% 24%;
    background-color: transparent;
  }

  .arrow-left {
    cursor: pointer;

    text-align: right;
  }

  .arrow-right {
    cursor: pointer;

    text-align: left;
    margin-left: 7%;
  }
`;
export const CarouselItemStyle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${(theme) => Theme.color};
  margin-right: -7%;
  width: ${(props) => (props.width ? props.width : "100%")};
`;
