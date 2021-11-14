import React from 'react';
import  ReactDOM  from 'react-dom';
import './ShareNoModal.css';
const ShareNoModal = (props)=>{
    const clickHandler = (event)=>{
        if (event.target.value==='yes')
        {
            const receiverId = localStorage.getItem("receiverId");
        fetch("http://localhost:4000/api/shareNumber",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({
                feedId:receiverId,
                donorId:localStorage.getItem("userId")
            })
        })
        .then(res=>{
            localStorage.removeItem("receiverId");
            return res.json();
        })
        .then(data=>{
            console.log(data);
            props.handleClose();
        })
        .catch(err=>{
            console.log(err);
        })
        }
        else{
            props.handleClose();
        }
        
    }
    return(
        ReactDOM.createPortal(
            <div class="share_big_container">
            <div className="share_container">
                <header className="share_Header">
                    <h2> LifeBlood</h2>
                    <i class="fa fa-times" aria-hidden="true" onClick = {props.handleClose}></i>
                </header>
                <div className="share_div_connect">Do u Want to connect?</div>
                <div className="share_btn">
                    <button value="yes" onClick={clickHandler}>Yes</button>
                    <button value="No" onClick={clickHandler}>No</button>
                </div>
            </div>
            </div>
        ,document.getElementById("modal-share-contact"))
    )
}
export default ShareNoModal;