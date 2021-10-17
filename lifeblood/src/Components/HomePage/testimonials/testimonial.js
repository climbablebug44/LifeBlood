import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Styles from './testimonial.module.css'

const options = {
  pagination: false,
  transitionMs: 300,
  showArrows: false,
  itemPadding: [
    5, 5, 5, 5
  ],
  autoPlaySpeed: 1000,
  onNextEnd: (nextItemObject, currentPageIndex) => {
    nextItemObject = 0;
    currentPageIndex = 0
  },
  breakPoints: [
    {
      width: 1,
      itemsToShow: 1
    }, {
      width: 550,
      itemsToShow: 2
    }, {
      width: 768,
      itemsToShow: 3
    }, {
      width: 1200,
      itemsToShow: 4
    }
  ]
};

const Testimonial = () => {
  return (
    <div className={Styles.testimonial}>
      <h1 className={Styles.heading}>Testimonials</h1>
      <Carousel {...options}>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
        <Item>Five</Item>
        <Item>Six</Item>
        <Item>Seven</Item>
        <Item>Eight</Item>
      </Carousel>
    </div>
  );
}

export default Testimonial