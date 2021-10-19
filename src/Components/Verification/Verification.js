import React from 'react';
import { Link } from 'react-router-dom';
import './Verfication.css';
const AccountVerification = ()=>{
    const email = localStorage.getItem('email');
    return (
        <div className="Acc_ver_container">
           <div className="login1Header">
             <span><Link to="/">ProfReview</Link></span>
           </div>
            <div className="Acc_ver_content">
                <div>
                    <h1>Verify your email address</h1>
                    <br></br>
                    <ul>
                      <li>Go to your inbox for <h4>{email}</h4></li>
                      <li>Click the link in the email we sent you.</li>  
                    </ul>
                    <br></br>
                    <br></br>
                    <h2>Didn't receive the email?</h2>
                    <p>Check your spam folder.</p>
                </div>
            </div>
        </div>
    );
}
export default AccountVerification;