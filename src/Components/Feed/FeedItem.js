import React from 'react';
import styles from './FeedItem.module.css';
import map from '../../assets/map.png';
import profile from '../../assets/feedProfile.jpg';

const FeedItem = (props) => {
    return (
        <li className={styles.list}>
            <div className={styles.upper}>
                <div className={styles['user-image']}>
                    <img src={profile} alt='request person' />
                </div>
                <div>
                    <h4>{props.name}</h4>
                    <p>is looking for <span>{props.blood}</span> blood in <span>{props.address}</span></p>
                    <h5>{props.time}</h5>
                </div>
            </div>
            <div className={styles.middle}>
                <p>{props.reason}</p>
                <div className={styles['map-image']}>
                    <img src={map} alt='map' />
                </div>
            </div>
            <div className={styles.lower}>

                <div className={styles['section-1']}>
                    <div className={styles['highlight-blood']}>{props.blood}</div>
                    <div>
                        <h5>Blood Donors Needed For</h5>
                        <p className={styles['unit-blood']}>{props.unit} Unit Blood</p>
                        <p>{props.address}</p>
                    </div>
                </div>
                <div className={styles['section-2']}></div>
                <div className={styles.donate}>
                    <a href='https://www.instagram.com'>Donate</a>
                </div>
            </div>
        </li>
    )
}

export default FeedItem;
