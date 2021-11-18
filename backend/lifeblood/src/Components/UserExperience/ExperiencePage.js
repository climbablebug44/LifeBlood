import React, { useState } from "react";
import Experience from "./Experience";
import styles from './ExperiencePage.module.css';

const experienceData = []

const ExperiencePage = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredExpe, setEnteredExpe] = useState('');
    fetch("http://localhost:4000/api/experience/get")
        .then(res=>{
            if(res.status!==200)
            {
                throw new Error("Error");
            }
            return res.json();
        })
        .then(resData=>{
            experienceData.push(resData
            );
            console.log(resData);
        })
        .catch(err=>{
            console.log(err);
            console.log('**');
        })
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
        fetch("http://localhost:4000/api/experience/add",{
            method:"POST",
            headers:{"content-Type":"application/json"},

            body:JSON.stringify({
                title:enteredTitle,
                username:userName,
                date:date,
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

        setEnteredTitle('');
        setEnteredExpe('')
    };

    const list = experienceData.map(item => {
        //return <Experience  item={item} />
        console.log(item);
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
*/
