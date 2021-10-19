import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
const Modal = (props)=>{
  return (
      ReactDOM.createPortal(
        <div className="modal">
            <header className="modal_header">
                 <h1>{props.title}</h1>
            </header>
            <div className="modal_content">{props.children}</div>
            <div className="modal_actions">
                <button onClick={props.onAcceptModal} disabled={!props.acceptEnabled} className="Modal-btn">Accept</button>
            </div>
        </div>,
        document.getElementById('modal-root')
      )
  );

}
export default Modal;