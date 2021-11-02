import React, { useState } from "react";
import Input from "./Input";
import { useHistory } from "react-router-dom";
import styles from './NewRequest.module.css';

const NewRequest = props => {
    const history = useHistory();
    const [enteredName, setEnteredName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [enteredAge, setEnteredAge] = useState('');
    const [ageIsValid, setAgeIsValid] = useState(false);
    const [enteredReason, setEnteredReason] = useState('');
    const [reasonIsValid, setReasonIsValid] = useState(false);
    const [enteredPin, setEnteredPin] = useState('');
    const [pinIsValid, setPinIsValid] = useState(false);
    const [enteredContact, setEnteredContact] = useState('');
    const [contactIsValid, setContactIsValid] = useState(false);
    const [enteredCity, setEnteredCity] = useState('');
    const [cityIsValid, setCityIsValid] = useState(false);
    const [enteredState, setEnteredSate] = useState('');
    const [stateIsValid, setStateIsValid] = useState(false);
    const [enteredHospital, setEnteredHospital] = useState('');
    const [hospitalIsValid, setHospitalIsValid] = useState(false);
    const [enteredAadhar, setEnteredAadhar] = useState('');
    const [aadharIsValid, setAadharIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [enteredGroup, setEnteredGroup] = useState()

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const CheckNameIsValid = () => {
        if (enteredName.length !== 0 && isNaN(enteredName)) {
            setNameIsValid(true);
        } else {
            setNameIsValid(false);
        }
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const checkAgeIsValid = () => {
        if (enteredAge.length !== 0 && +enteredAge > 1 && +enteredAge <= 100) {
            setAgeIsValid(true);
        } else {
            setAgeIsValid(false);
        }
    }
    const contactChangeHandler = event => {
        setEnteredContact(event.target.value);
    }

    const checkContactIsValid = () => {
        if (enteredContact.length === 10 && typeof (+enteredContact) === 'number' && +enteredContact > 0) {
            setContactIsValid(true);
        } else {
            setContactIsValid(false);
        }
    }


    const reasonChangeHandler = event => {
        setEnteredReason(event.target.value)
    }

    const checkReasonIsValid = () => {
        if (enteredReason.length !== 0 && isNaN(enteredReason)) {
            setReasonIsValid(true);
        } else {
            setReasonIsValid(false);
        }
    }

    const groupChangeHandler = event => {
        setEnteredGroup(event.target.value)
    }

    const pinChangeHandler = event => {
        setEnteredPin(event.target.value)
    }

    const checkPinIsValid = () => {
        if (enteredPin.length === 6 && typeof (+enteredPin) === 'number' && +enteredPin > 110000) {
            setPinIsValid(true);
        } else {
            setPinIsValid(false);
        }
    }

    const cityChangeHandler = event => {
        setEnteredCity(event.target.value);
    }

    const checkCityIsValid = () => {
        if (enteredCity.length !== 0 && isNaN(enteredCity)) {
            setCityIsValid(true);
        } else {
            setCityIsValid(false);
        }
    }

    const stateChangeHandler = event => {
        setEnteredSate(event.target.value);
    }

    const checkStateIsValid = () => {
        if (enteredState.length !== 0 && isNaN(enteredState)) {
            setStateIsValid(true);
        } else {
            setStateIsValid(false);
        }
    }

    const hospitalChangeHandler = event => {
        setEnteredHospital(event.target.value);
    }

    const checkHospitalIsValid = () => {
        if (enteredHospital.length !== 0 && isNaN(enteredHospital)) {
            setHospitalIsValid(true);
        } else {
            setHospitalIsValid(false);
        }
    }

    const aadharChangeHandler = event => {
        setEnteredAadhar(event.target.value)
        console.log(enteredAadhar)
    }

    const checkAagharIsvalid = () => {
        if (enteredAadhar.length === 16 && typeof (+enteredAadhar) === 'number') {
            setAadharIsValid(true);
        } else {
            setAadharIsValid(false);
        }
    }

    const requestFormSubmitHandler = (event)=>{
        event.preventDefault();
        fetch("http://localhost:4000/api/newRequest",{
            method:"POST",
            body:JSON.stringify({
                name:enteredName,
                age:enteredAge,
                state:enteredState,
                contact:enteredContact,
                city:enteredCity,
                bloodGrp:enteredGroup,
                reason:enteredReason,
                aadhar:enteredAadhar,
                pincode:enteredPin,
                hospital:enteredHospital,
              /*  latitude:ashwin daale ga,
                longitude:ashwin daale ga
                */
            }),
            headers:{
                "content-Type":"application/json"
            }
        })
        .then(res=>{
            if(res.status!==200)
            {
                throw new Error("Error accured");
            }
            return res.json();
        })
        .then(resData=>{
            history.goBack();
        })


    }
    return (
        <div className={styles.container}>
            <form className={styles.form} method='POST' onSubmit={requestFormSubmitHandler}>
                <Input label="Requester's Full Name  " input={{
                    id: 'requesterName',
                    name: 'requesterName',
                    type: 'text', placeholder: 'Aman Sahu'

                }} onChange={nameChangeHandler} value={enteredName} onBlur={CheckNameIsValid} />
                <Input label="Patient Age  " input={{
                    id: 'patientAge',
                    name: 'patientAge',
                    type: 'number', placeholder: '25',
                    min: '1',
                    max: '100',
                    step: '1',

                }} onChange={ageChangeHandler} value={enteredAge} onBlur={checkAgeIsValid} />

                <Input label="Your Contact no.  " input={{
                    id: 'contact',
                    name: 'contact',
                    type: 'number',
                    placeholder: '8989898989'
                }} onChange={contactChangeHandler} value={enteredContact} onBlur={checkContactIsValid} />

                <Input label="Your Aadhar no.  " input={{
                    id: 'aadhar',
                    name: 'aadhar',
                    type: 'number',
                    placeholder: '1234 5678 9012 3456'
                }} onChange={aadharChangeHandler} value={enteredAadhar} onBlur={checkAagharIsvalid} />

                <div className={styles.textarea}>
                    <label htmlFor='reason'>Reason for blood requirement </label>
                    <textarea name='reason' id='reason' rows='3' cols='50' required placeholder='write your reason here ....' maxLength='120' onChange={reasonChangeHandler} value={enteredReason} onBlur={checkReasonIsValid} />
                </div>
                <div className={styles.select}>
                    <label htmlFor='bloodGrp'>Required Blood Grp </label>
                    <select required defaultValue='A+' onChange={groupChangeHandler} value={enteredGroup}>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>
                <Input label="Postal Code  " input={{
                    id: 'pincode',
                    name: 'pincode',
                    type: 'number', placeholder: '464651'

                }} onChange={pinChangeHandler} value={enteredPin} onBlur={checkPinIsValid} />

                <Input label="City  " input={{
                    id: 'city',
                    name: 'city',
                    type: 'text', placeholder: 'Boisar'

                }} onChange={cityChangeHandler} value={enteredCity} onBlur={checkCityIsValid} />

                <Input label="State  " input={{
                    id: 'state',
                    name: 'state',
                    type: 'text', placeholder: 'Maharashtra'

                }} onChange={stateChangeHandler} value={enteredState} onBlur={checkStateIsValid} />
                <Input label="Hospital Name  " input={{
                    id: 'hospital',
                    name: 'hospital',
                    type: 'text', placeholder: 'Abhimanyu memorial hospital, Maharashtra'
                }} onChange={hospitalChangeHandler} value={enteredHospital} onBlur={checkHospitalIsValid} />

                <div className={styles.buttons}>
                    <button type='reset'>Clear</button>
                    <button type='submit' >Submit</button>
                </div>
            </form>
        </div>
    );
}

export default NewRequest;