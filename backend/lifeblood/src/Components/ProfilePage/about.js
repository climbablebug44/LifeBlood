import React, { useState, useEffect } from 'react';
import styles from './about.module.css';
import image from '../../assets/victer.jpeg';

const About = () => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: localStorage.getItem("userId") })
    }

    const [user, setUser] = useState({});

    const changeUser = (newUser) => {
        setUser(newUser);
    }

    var req = "/api/profile";

    useEffect(() => {
        fetch(req, requestOptions).then(
            response => {
                if (response.status !== 200) {
                    throw new Error("invalid response from server");
                }
                return response.json()
            }
        ).then(data_ => {
            changeUser(data_)
        }).catch(error => {
            // console.log("[error-log]: ", error);
        });
    }, [])

    // console.log("user = ", user)

    if (user != null)
        return (
            <div className={styles.container}>
                <div className={styles.contain}>
                    <div className={styles['container-1']}>
                        <div className={styles.image}>
                            <img alt="<profile photu>" src={image} />
                        </div>
                        <div className={styles.name}>
                            {user.name}
                        </div>
                        <div className={styles.bloodGrp}>
                            Blood Group (<span>{user.blood_group}</span>)
                        </div>
                    </div>
                    <div className={styles['container-2']}>
                        <div className={styles.email}>
                            {user.email}
                        </div>
                        <div className={styles.phone}>
                            {user.phone_number}
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
    else
        return(<React.Fragment/>)
}

export default About;

