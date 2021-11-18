import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import ShareNoModal from '../ShareNoModal/ShareNoModal';

const ModalForShare = (props)=>{
    return (
        <React.Fragment>
            <ShareNoModal handleClose = {props.handleClose}/>
        </React.Fragment>
    )
}
export default ModalForShare