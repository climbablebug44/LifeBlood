import React from "react";
import styles from './Experience.module.css'

const Experience = props => {

    var date = new Date(props.item.date);
    var s;
    if(props.item.user === null || props.item.user === undefined)
        s = "Anonymous";
    else    
        s = props.item.user;

    return <div className={styles.experience}>
        <div className={styles['user-info']}>
            <div className={styles.image}>
                <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='User profile' />
            </div>

            <div className={styles.name_date}>
                <h3>{s}</h3>
                <h4>{date.toLocaleString()}</h4>
            </div>
        </div>
        <div className={styles.text}>
            <span>{props.item.title}</span>
            <div>{props.item.content}</div>
        </div>
    </div>
}

export default Experience;