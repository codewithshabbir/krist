declare module "react-slick" {
  import { Component, ReactNode } from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    nextArrow?: ReactNode;
    prevArrow?: ReactNode;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    pauseOnHover?: boolean;
    fade?: boolean;
    swipeToSlide?: boolean;
    children?: ReactNode;
  }

  export default class Slider extends Component<Settings> {
    slickNext(): void;
    slickPrev(): void;
  }
}