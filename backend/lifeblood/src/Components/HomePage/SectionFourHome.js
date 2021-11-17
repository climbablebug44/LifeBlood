import React from 'react';
import styles from './SectionFourHome.module.css';
const SectionFourHome = props => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h2>Myths About Donating Blood?</h2>
                <div className={styles['container-text']}>
                    <ul>
                        <li>
                            <h3 className={styles.myth}>
                                <span>Myth: </span>Health deteriorates after donating blood.
                            </h3>
                            <p className={styles['myth-buster']}>
                                <span>Fact: </span>If you are healthy prior to donation, your recovery is complete in a day or two. It is advised to rest a while after donating. Drinking enough liquids replaces the lost fluid within a couple of hours. The body produces new cells faster after a donation. All the RBCs are replaced within 3-4 days and WBCs within 3 weeks.
                            </p>
                        </li>
                        <li>
                            <h3 className={styles.myth}>
                                <span>Myth: </span>There is limited blood in the body and it is unhealthy to give some away.
                            </h3>
                            <p className={styles['myth-buster']}>
                                <span>Fact: </span>Only about 350-450ml of blood is taken during a donation session. There is enough blood in the body to donate it without any ill effects. The body makes new blood after donation.
                            </p>
                        </li>
                        <li>
                            <h3 className={styles.myth}>
                                <span>Myth: </span>Heavy people are healthier and have more blood to give.
                            </h3>
                            <p className={styles['myth-buster']}>
                                <span>Fact: </span>Being overweight makes people less healthy. Overweight people do not have more blood.
                            </p>
                        </li>
                        <li>
                            <h3 className={styles.myth}>
                                <span>Myth: </span>You cannot take part in sports or other physical activities after donating blood.
                            </h3>
                            <p className={styles['myth-buster']}>
                                <span>Fact: </span>Giving blood does not interfere with ability to perform physically. Advice to avoid heavy lifting or strenuous workouts for the rest of the day is given after the donation. You can get back on track the next day.
                            </p>
                        </li>
                        <li>
                            <h3 className={styles.myth}>
                                <span>Myth: </span>Taking medication means that one cannot be a blood donor.
                            </h3>
                            <p className={styles['myth-buster']}>
                                <span>Fact: </span>Depending on the medication being taken, it may halt donation for a period, though in many cases it won't prevent a donation. person in charge or the nursing staff should be informed before donating.
                            </p>
                        </li>

                    </ul>
                </div>

            </div>
        </React.Fragment>
    );
}
export default SectionFourHome;