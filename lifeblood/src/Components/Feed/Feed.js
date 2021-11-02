import React from "react";
import styles from './Feed.module.css';
import FeedItems from "./FeedItems";


const Feed = props => {
    fetch("http://localhost:4000/api/feed")
    .then(res=>{
        if(res.status!==200)
        {
            throw new Error("Could not fetch")
        }
        return res.json();
    })
    .then(resData=>{

    })
    .catch(err=>{
        console.log(err)
    })
    return (
        <React.Fragment>

            <div className={styles['div-container']}>
                <div className={styles['div-1']}></div>
                <div className={styles['feed-container']}>
                    <FeedItems />
                </div>
                <div className={styles['div-3']}>
                    <form className={styles['sort-by']}>
                        <label htmlFor='sort'>Sort by : </label>
                        <select name='sort' id='sort'>
                            <option value='blood'>Blood Group</option>
                            <option value='location'>Nearest Request</option>
                        </select>
                    </form>
                    <a href='/request' className={styles.request}>+</a>
                    <p>Post Blood Request</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Feed;