import React, {useState} from "react";
import RMapGL from '../MapPage/Maps/MapGL';
import styles from './NewRequest.module.css';

const NewRequest = props => {

    return (
        <React.Fragment>
            <form className={styles.container} method='POST' action='/'>
                <div>
                    <label htmlFor='requesterName'>Requester's Full Name:</label>
                    <input name='requesterName' id='requesterName' type='text' required placeholder='Aman Sahu' />
                </div>
                <div>
                    <label htmlFor='patientAge'>Patient Age:</label>
                    <input name='patientAge' id='patientAge' type='number' required placeholder='25' min='1' max='100' step='1' />
                </div>
                <div>
                    <label htmlFor='reason'>Reason for blood requirement:</label>
                    <textarea name='reason' id='reason' rows='3' cols='50' required placeholder='my friend abhimanyu lost excessive blood in a road accident' />
                </div>
                <div>
                    <label htmlFor='bloodGrp'>Required Blood Grp:</label>
                    <select required defaultValue='A+'>
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
                <div>
                    <label htmlFor='pincode'>Postal Code :</label>
                    <input name='pincode' id='pincode' type='number' required placeholder='454590' />
                </div>
                <div>
                    <label htmlFor='city'>City:</label>
                    <input name='city' id='city' type='text' required placeholder='Boisar' />
                </div>
                <div>
                    <label htmlFor='state'>State:</label>
                    <input name='state' id='state' type='text' required placeholder='Maharashtra' />
                </div>
                <div>
                    <label htmlFor='hospital'>City:</label>
                    <input name='hospital' id='hospital' type='text' required placeholder='Abhimanyu memorial hospital, Maharashtra' />
                </div>
                <div>
                    <RMapGL
                    dimentions={{height: 30, width: 30}}
                    visibleGeocoder={true}
                    shouldGeolocate={false}
                    />

                </div>
                <div>
                    <button type='reset'>Clear</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default NewRequest;