import React from "react";
import Styles from "./section2.module.css";
import Testimonial from "./testimonial";

const Section2 = () => {
  return (
    <React.Fragment>
      <div className={Styles.section2}>
        <div className={Styles.info}>
          <Testimonial />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section2;
