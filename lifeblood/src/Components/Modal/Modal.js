import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
const Modal = (props)=>{
  return (
      ReactDOM.createPortal(
        <div className="modal">
            <header className="modal_header">
                 <h1>{props.children}</h1>
                 <i class="fa fa-times" aria-hidden="true" onClick={props.onCancelModel}></i>
            </header>
        </div>,
        document.getElementById('modal-root')
      )
  );

}
export default Modal;