import React from 'react';
import './DoUWantToConnect.css';
import  ReactDOM  from 'react-dom';
const DoUWantConnect = ()=>{
 return (
     ReactDOM.createPortal(
     <div className="connect__container">
         <header className="connect__header"> 
             <h1>LifeBlood</h1>
         </header>
         <div className="connect__span">
            <span>Do u want to connect to donate blood?</span>
         </div>
         <br></br>
         <div className="connect__button__div">
           <div className="connect__button1">
              <button>Yes</button>
           </div>
           <div className="connect__button2">
               <button>No</button>
           </div>             
         </div>
     </div>
     ,document.getElementById("connect-root"))
 );
}
export default DoUWantConnect;