import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import ShareContactModal from './ShareContactModal';

const ShareContact = (props)=>{
    return (
        <React.Fragment>
            
            <ShareContactModal handleClose = {props.handleClose} donorId={props.donorId} userId={localStorage.getItem("userId")} feedId={props.feedId}  messageLoader = {props.messageLoader}/>
        </React.Fragment>
    )
}
export default ShareContact