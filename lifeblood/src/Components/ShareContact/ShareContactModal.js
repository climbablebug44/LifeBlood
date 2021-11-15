import React from 'react';
import  ReactDOM  from 'react-dom';
import './ShareContactModal.css';
const ShareContactModal = (props)=>{
    console.log(props.userId, props.donorId);
    const clickHandler = (event)=>{
        if (event.target.value==='yes')
        {
            //const receiverId = localStorage.getItem("receiverId");
            fetch("http://localhost:4000/api/shareNumber/123",{
                method:"POST",
                headers:{"content-Type":"application/json"}
                ,
                body:JSON.stringify({
                    feedId:props.feedId,
                    userId:props.userId,
                    donorId:props.donorId
                })
            })
            .then(res=>{
                return res.json();
            })
            .then(resData=>{
                console.log(resData);
            })
            .catch(err=>{
                console.log(err);
            })

            fetch(`http://localhost:4000/api/shareNumber/delete/${localStorage.getItem("userId")}/${props.donorId}/${props.feedId}`)
            .then(res=>{
              return res.json()
            })
            .then(resData=>{
              props.messageLoader(resData.messages);
              props.handleClose();
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            
            fetch(`http://localhost:4000/api/shareNumber/delete/${localStorage.getItem("userId")}/${props.donorId}/${props.feedId}`)
            .then(res=>{
              return res.json()
            })
            .then(resData=>{
              console.log(resData);
              props.handleClose();
            })
            .catch(err=>{
                console.log(err);
            })
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
                <div className="share_div_connect">Do u want to share contact for further communication?</div>
                <div className="share_btn">
                    <button value="yes" onClick={clickHandler}>Yes</button>
                    <button value="No" onClick={clickHandler}>No</button>
                </div>
            </div>
            </div>
        ,document.getElementById("modal-contact"))
    )
}
export default ShareContactModal;