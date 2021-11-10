import React from "react";
import styles from './Experience.module.css'

const Experience = props => {
    return <div className={styles.experience}>
        <div className={styles['user-info']}>
            <div className={styles.image}>
                <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='User profile' />
            </div>

            <div className={styles.name_date}>
                <h3>{props.item.user}</h3>
                <h4>{props.item.date}</h4>
            </div>
        </div>
        <div className={styles.text}>
            <span>{props.item.title}</span>
            <div>{props.item.experience}</div>
        </div>
    </div>
}

export default Experience;