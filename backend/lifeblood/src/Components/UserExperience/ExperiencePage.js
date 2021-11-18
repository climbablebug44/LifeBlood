import React, { useState,useEffect } from "react";
import Experience from "./Experience";
import styles from './ExperiencePage.module.css';

const experienceData = []

const ExperiencePage = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredExpe, setEnteredExpe] = useState('');
    const [experienceData,setExperienceData] = useState([]);
    useEffect(()=>{
        fetch("/api/experience/get")
        .then(res=>{
            if(res.status!==200)
            {
                throw new Error("Error");
            }
            return res.json();
        })
        .then(resData=>{
            resData.reverse();
            setExperienceData(resData);
            console.log(experienceData);
        })
        .catch(err=>{
            console.log(err);
            console.log('**');
        })
    },[])
   
    const inputChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    console.log(experienceData);

    const textAreaChangeHandler = (event) => {
        setEnteredExpe(event.target.value)
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        const userName = localStorage.getItem("userName");
        const date = new Date().toISOString();
        console.log(date);
        fetch("/api/experience/add",{
            method:"POST",
            headers:{"content-Type":"application/json"},

            body:JSON.stringify({
                title:enteredTitle,
                user:userName,
                date:date,
                //userId:localhost.getItem("userId"),
                experience:enteredExpe
            })
        })
            .then(res=>{
                if(res.status!==200)
                {
                    throw new Error("Error");
                }
                return res.json();
            })
            .then(resData=>{
                console.log(resData);
            })
            .catch(err=>{
                console.log(err);
            })
            fetch("/api/experience/get")
        .then(res=>{
            if(res.status!==200)
            {
                throw new Error("Error");
            }
            return res.json();
        })
        .then(resData=>{
            console.log("resdata = ", resData);
            resData.reverse();
            setExperienceData(resData);
            //console.log(experienceData,"**");
        })
        .catch(err=>{
            console.log(err);
            //console.log('**');
        })

        setEnteredTitle('');
        setEnteredExpe('')
    };

    const list = experienceData.map(item => {
        return <Experience key={item._id} item={item} />
        
    })

    return <div className={styles.container}>

        <div className={styles['inner-container']}>
            <p>Share Your experiences with others here</p>
            <form className={styles.form} onSubmit={submitFormHandler}>
                <div className={styles.inputTxt}>
                    <label htmlFor='title'>Write title of your experience</label>
                    <input type='text' name='title' id='title' required onChange={inputChangeHandler} value={enteredTitle} />
                </div>
                <textarea required onChange={textAreaChangeHandler} value={enteredExpe} />
                <button type='submit'>Add Experience</button>
            </form>
            <div className={styles.experiences}>
                {list}
            </div>
        </div>

    </div>

}

export default ExperiencePage;



/*
import React, { useState } from "react";
import Experience from "./Experience";
import styles from './ExperiencePage.module.css';

const experienceData = []

const ExperiencePage = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredExpe, setEnteredExpe] = useState('');
    fetch("/api/experience")
        .then(res => {
            if (res.status !== 200) {
                throw new Error("Error");
            }
            return res.json();
        })
        .then(resData => {
            experienceData.push(resData.data);
        })
        .catch(err => {
            console.log(err);
        })
    const inputChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const textAreaChangeHandler = (event) => {
        setEnteredExpe(event.target.value)
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        const userName = localStorage.getItem("userName");
        const date = new Date().toISOString();
        console.log(date);
        fetch("/api/experience", {
            method: "POST",
            "content-Type": "application-json",
            body: JSON.stringify({
                title: enteredTitle,
                user: userName,
                date: date,
                experience: enteredExpe
            })
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error("Error");
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            })

        setEnteredTitle('');
        setEnteredExpe('')
    };

    

    return <div className={styles.container}>

        <div className={styles['inner-container']}>
            <p>Share Your experiences with others here</p>
            <form className={styles.form} onSubmit={submitFormHandler}>
                <div className={styles.inputTxt}>
                    <label htmlFor='title'>Write title of your experience</label>
                    <input type='text' name='title' id='title' required onChange={inputChangeHandler} value={enteredTitle} />
                </div>
                <textarea required onChange={textAreaChangeHandler} value={enteredExpe} />
                <button type='submit'>Add Experience</button>
            </form>
            <div className={styles.experiences}>
                {list}
            </div>
        </div>

    </div>

}

export default ExperiencePage;
*/
