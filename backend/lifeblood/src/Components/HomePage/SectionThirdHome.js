import React from 'react';
import styles from './SectionThirdHome.module.css';
import Button from '../UI/Button';
import image from '../../assets/sectionThree.jpg'

function SectionThirdHome() {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles['container-image']}>
                    <img src={image} alt='group of people' />
                </div>
                <div className={styles['container-text']}>
                    <h1>About Us</h1>
                    <div className={styles['about-us']}>
                        <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                            <div className={styles.btn}>
                                <Button><a href='/about' >Know More About Us</a></Button>
                            </div>
                        </div>
                        <div>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>

    );
}

export default SectionThirdHome;