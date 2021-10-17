import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';
const ErrorHandler = (props)=>{
  return (
      <React.Fragment>
          {props.error && <Backdrop onClick={props.onHandle}/>}
          {
                props.error && <Modal title="An error Occured"
                onCancelModel = {props.onHandle}
                onAcceptModal = {props.onHandle}
                 acceptEnabled>
                </Modal>
          }
      </React.Fragment>
  );

}
export default ErrorHandler;
