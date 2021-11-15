import React from 'react';
import styles from './about.module.css';
import image from '../../assets/victer.jpeg';

const About = () => {

    const user = {
        name: 'Victer Paul',
        bloodGrp: 'O-',
        email: 'victerpaul@iiitkottayam.ac.in',
        phone: 9898989898,
        pendingDonateRequest: 2,
        noOfTimesDonated: 3,
        requestPostonFeed: 'camnjhda12',
        imgSrc: image
    }
    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <div className={styles['container-1']}>
                    <div className={styles.image}>
                        <img src={image} />
                    </div>
                    <div className={styles.name}>
                        {user.name}
                    </div>
                    <div className={styles.bloodGrp}>
                        Blood Group (<span>{user.bloodGrp}</span>)
                    </div>
                </div>
                <div className={styles['container-2']}>
                    <div className={styles.email}>
                        {user.email}
                    </div>
                    <div className={styles.phone}>
                        {user.phone}
                    </div>
                    <div className={styles.number}>
                        {user.pendingDonateRequest}
                    </div>
                    <div className={styles.number}>
                        {user.noOfTimesDonated}
                    </div>
                    <div className={styles.id}>
                        <a href='#'>Go to your request</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

