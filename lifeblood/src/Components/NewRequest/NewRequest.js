import React, { Component } from "react";
import RMapGL from "../MapPage/Maps/MapGL";
import Input from "./Input";
import styles from './NewRequest.module.css';


export default class NewReq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredName: "",
            nameIsValid: false,
            enteredAge: "",
            ageIsValid: false,
            enteredReason: "",
            reasonIsValid: false,
            enteredPin: "",
            pinIsValid: false,
            enteredContact: "",
            contactIsValid: false,
            enteredCity: "",
            cityIsValid: false,
            enteredState: "",
            stateIsValid: false,
            enteredAadhar: "",
            aadharIsValid: false,
            formIsValid: false,
            enteredGroup: "",
        }
    }

    nameChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredName: event.target.value
        });
    }

    CheckNameIsValid = () => {
        const { enteredName } = this.state;
        if (enteredName.length !== 0 && isNaN(enteredName)) {
            this.setState({
                ...this.state,
                nameIsValid: true
            });
        } else {
            this.setState({
                ...this.state,
                nameIsValid: false
            });
        }
    }

    ageChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredAge: event.target.value
        });
    }

    checkAgeIsValid = () => {
        const { enteredAge } = this.state;
        if (enteredAge.length !== 0 && +enteredAge > 1 && +enteredAge <= 100) {
            this.setState({
                ...this.state,
                ageIsValid: true
            });
        } else {
            this.setState({
                ...this.state,
                ageIsValid: false
            });
        }
    }
    contactChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredContact: event.target.value
        });
    }

    checkContactIsValid = () => {
        let x = false;
        const { enteredContact } = this.state;
        if (enteredContact.length === 10 && typeof (+enteredContact) === 'number' && +enteredContact > 0) {
            x = true;
        }
        this.setState({
            ...this.state,
            contactIsValid: x
        });
    }


    reasonChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredReason: event.target.value
        });
    }

    checkReasonIsValid = () => {
        let x = false;
        const { enteredReason } = this.state;
        if (enteredReason.length !== 0 && isNaN(enteredReason)) {
            x = true;
        }
        this.setState({
            ...this.state,
            reasonIsValid: x
        });
    }

    groupChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredGroup: event.target.value
        });
    }

    pinChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredPin: event.target.value
        });
    }

    checkPinIsValid = () => {
        const { enteredPin } = this.state;
        let x = false;
        if (enteredPin.length === 6 && typeof (+enteredPin) === 'number' && +enteredPin > 110000) {
            x = true;
        }
        this.setState({
            ...this.state,
            pinIsValid: x
        });
    }

    cityChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredCity: event.target.value
        });
    }

    checkCityIsValid = () => {
        const { enteredCity } = this.state;
        let x = false;
        if (enteredCity.length !== 0 && isNaN(enteredCity)) {
            x = true;
        }
        this.setState({
            ...this.state,
            cityIsValid: x
        });
    }

    stateChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredState: event.target.value
        });
    }

    checkStateIsValid = () => {
        const { enteredState } = this.state;
        let x = false;
        if (enteredState.length !== 0 && isNaN(enteredState)) {
            x = true;
        }
        this.setState({
            ...this.state,
            stateIsValid: x
        });
    }

    aadharChangeHandler = event => {
        this.setState({
            ...this.state,
            enteredAadhar: event.target.value
        });
    }

    checkAagharIsvalid = () => {
        const { enteredAadhar } = this.state;
        let x = false;
        if (enteredAadhar.length === 16 && typeof (+enteredAadhar) === 'number') {
            x = true;
        }
        this.setState({
            ...this.state,
            aadharIsValid: x
        });
    }

    onSubmitHandler = () => {
        console.log(this.state);
        console.log("viewport: ", this.child.state.viewport);
        // TODO : send data to backend
    }

    render() {
        return (
            <div className={styles.container}>
                <form className={styles.form} method='POST' action='/'>
                    <Input label="Requester's Full Name  " input={{
                        id: 'requesterName',
                        name: 'requesterName',
                        type: 'text', placeholder: 'Aman Sahu'

                    }} onChange={this.nameChangeHandler} value={this.state.enteredName} onBlur={this.CheckNameIsValid} />
                    <Input label="Patient Age  " input={{
                        id: 'patientAge',
                        name: 'patientAge',
                        type: 'number', placeholder: '25',
                        min: '1',
                        max: '100',
                        step: '1',

                    }} onChange={this.ageChangeHandler} value={this.state.enteredAge} onBlur={this.checkAgeIsValid} />

                    <Input label="Your Contact no.  " input={{
                        id: 'contact',
                        name: 'contact',
                        type: 'number',
                        placeholder: '8989898989'
                    }} onChange={this.contactChangeHandler} value={this.state.enteredContact} onBlur={this.checkContactIsValid} />

                    <Input label="Your Aadhar no.  " input={{
                        id: 'aadhar',
                        name: 'aadhar',
                        type: 'number',
                        placeholder: '1234 5678 9012 3456'
                    }} onChange={this.aadharChangeHandler} value={this.state.enteredAadhar} onBlur={this.checkAagharIsvalid} />

                    <div className={styles.textarea}>
                        <label htmlFor='reason'>Reason for blood requirement </label>
                        <textarea name='reason' id='reason' rows='3' cols='50' required placeholder='write your reason here ....' maxLength='120' onChange={this.reasonChangeHandler} value={this.state.enteredReason} onBlur={this.checkReasonIsValid} />
                    </div>
                    <div className={styles.select}>
                        <label htmlFor='bloodGrp'>Required Blood Grp </label>
                        <select required defaultValue='A+' onChange={this.groupChangeHandler} value={this.state.enteredGroup}>
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

                    }} onChange={this.pinChangeHandler} value={this.state.enteredPin} onBlur={this.checkPinIsValid} />

                    <Input label="City  " input={{
                        id: 'city',
                        name: 'city',
                        type: 'text', placeholder: 'Boisar'

                    }} onChange={this.cityChangeHandler} value={this.state.enteredCity} onBlur={this.checkCityIsValid} />

                    <Input label="State  " input={{
                        id: 'state',
                        name: 'state',
                        type: 'text', placeholder: 'Maharashtra'

                    }} onChange={this.stateChangeHandler} value={this.state.enteredState} onBlur={this.checkStateIsValid} />
                    <label className={styles.tempLabel}>
                        Locate Yourself On Map
                    </label>
                    
                    <div style={{ paddingLeft: 1.2 + "vw" }}>
                        <RMapGL
                            center={{ lat: 0, long: 0 }}
                            dimentions={{ height: 43, width: 41 }}
                            geocoder={{ top: 115 + "vh", right: 29 + "vw" }}
                            onRef={ref => (this.child = ref)}
                        />
                    </div>


                    <div className={styles.buttons}>
                        <button type='reset'>Clear</button>
                        <button type='submit' onClick={this.onSubmitHandler} >Submit</button>
                    </div>
                </form>
            </div>
        );
    }

}