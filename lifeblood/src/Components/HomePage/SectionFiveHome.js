import React from "react";
import styles from './SectionFiveHome.module.css';
const SectionFiveHome = props => {

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1>LifeBlood's Awesome Features</h1>
        <div className={styles.features}>
          <div className={styles['features-set']}>
            <div className={styles.feature}>
              <h3>Request Blood</h3>
              <p>combined with a handful of model sentence structures to generate Lorem Ipsum
                which looks reasonable the generated Lorem Ipsum is .</p>
            </div>
            <div className={styles.feature}>
              <h3>Social Feed</h3>
              <p>combined with a handful of model sentence structures to generate Lorem Ipsum
                which looks reasonable the generated Lorem Ipsum is .</p>
            </div>
            <div className={styles.feature}>
              <h3>Donate Blood</h3>
              <p>combined with a handful of model sentence structures to generate Lorem Ipsum
                which looks reasonable the generated Lorem Ipsum is .</p>
            </div>
            <div className={styles.feature}>
              <h3>Authentic Donors</h3>
              <p>combined with a handful of model sentence structures to generate Lorem Ipsum
                which looks reasonable the generated Lorem Ipsum is.</p>
            </div>
          </div>
          <div className={styles['features-set']}>
            <div className={styles.feature}>
              <h3>Nearest Donors</h3>
              <p>combined with a handful of model sentence structures to generate Lorem Ipsum
                which looks reasonable the generated Lorem Ipsum is.</p>
            </div>
            <div className={styles.feature}>
              <h3>Map View</h3>
              <p>combined with a handful of model sentence structures to generate Lorem Ipsum
                which looks reasonable the generated Lorem Ipsum is.</p>
            </div>
            <div className={styles.feature}>
              <h3>Blood Compatibility</h3>
              <p>combined with a handful of model sentence structures to generate Lorem Ipsum
                which looks reasonable the generated Lorem Ipsum is.</p>
            </div>
            <div className={styles.feature}>
              <h3>Genuine informations</h3>
              <p>combined with a handful of model sentence structures to generate Lorem Ipsum
                which looks reasonable the generated Lorem Ipsum is.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SectionFiveHome;