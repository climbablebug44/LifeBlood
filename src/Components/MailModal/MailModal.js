import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import Modal from '../Modal/Modal';
const MailModal = (props)=>{
    return (
        <React.Fragment>
            <Backdrop/>
            <Modal title= {props.title} >
                Mail Send successfully!
            </Modal>
        </React.Fragment>
    )
}
export default MailModal;