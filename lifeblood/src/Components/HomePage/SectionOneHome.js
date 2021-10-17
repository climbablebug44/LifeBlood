import React from 'react';
import styles from './SectionOneHome.module.css';
import Button from '../UI/Button';
import image from '../../assets/sectionOne1.jpg'

function SectionOneHome() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles['container-text']}>
          <h1>Life Blood Platform</h1>
          <span>Is a Platform to connect people who need blood with those willing to give
            it, ASAP</span>
          <div className={styles.btn}>
            <Button>Find Blood</Button>
          </div>
        </div>
        <div className={styles['container-image']}>
          <img src={image} alt='group of people donating blood'/>
        </div>
      </div>
    </React.Fragment>

  );
}

export default SectionOneHome
