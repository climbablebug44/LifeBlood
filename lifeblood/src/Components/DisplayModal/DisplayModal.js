import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import DetailsForm from "../DetailsForm/DetailsForm";

const DisplayModal = (props)=>{
    return (
        <React.Fragment>
            <Backdrop/>
            <DetailsForm Details=  {props.Details}/>
        </React.Fragment>
    )
}
export default DisplayModal;