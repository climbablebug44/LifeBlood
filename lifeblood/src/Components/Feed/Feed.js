import React,{useState,useEffect} from "react";
import styles from './Feed.module.css';
import FeedItems from "./FeedItems";
import ModalForShare from "../modalForShare/ModalForShare";

const Feed = props => {
    const [verify,setVerify] = useState(false);
    const verified = localStorage.getItem("isVerified");
    console.log(verified)
    useEffect(()=>{
        if(verified==='true')
        {
            setVerify(true)
        }
        
    },[])
    const closeHandler = ()=>{
        setVerify(false);
    }
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
            {verify && <ModalForShare handleClose = {closeHandler}/>}
        </React.Fragment>
    );
}

export default Feed;