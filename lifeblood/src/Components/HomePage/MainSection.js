import React from 'react';
import ImgSlider from './ImgSlider';
import styles from './MainSection.module.css';
import SectionFiveHome from './SectionFiveHome';
import SectionFourHome from './SectionFourHome';
import SectionOneHome from './SectionOneHome';
import SectionThirdHome from './SectionThirdHome';
import SectionTwoHome from './SectionTwoHome';
import Footer from './footer';
import Section2 from './testimonials/section2';
import image from '../../assets/distraction.jpg';

const MainSection = (props) => {
  return <React.Fragment>
    <main className={styles.main}>
      <ImgSlider/>
      <SectionOneHome/>
      <SectionTwoHome/>
      <SectionThirdHome/>
      <SectionFourHome/>
      <div className={styles.distraction}>
        <img src={image} alt='random girl'/>
      </div>
      <SectionFiveHome/>
      <Section2/>
      <Footer/>
    </main>
  </React.Fragment>
}
export default MainSection;