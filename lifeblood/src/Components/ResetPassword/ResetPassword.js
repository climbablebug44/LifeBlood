import React,{useState} from 'react';
import './ResetPassword.css';
import MailModal from '../MailModal/MailModal';
const ResetPassword = ()=>{
    const [email,setEmail] = useState(null);
    const [success,setSuccess] = useState(false);
    const resetPasswordHandler = (event)=>{
        setEmail(event.target.value);
       
    }
    const ResetPasswordSubmitHandler = (event)=>{
        event.preventDefault();
        setSuccess(true);
        fetch("https://localhost:4000/api/resetpassowrd",{
            method:"POST",
            headers:{
                "content-Type":"application/json",

            },
            body:JSON.stringify({
                email:email
            })
        })
        .then(res=>{
            if(res.status!==200)
            {
                throw new Error("error Occured");
            }
            return res.json();
        })
        .then(resData=>{
            console.log("sent successfully");
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <React.Fragment>
            <div className="resetPassword_container">
                <form onSubmit = {ResetPasswordSubmitHandler}>
                    <div className="resetPassword_div">
                    
                        <span>Enter Your E-mail</span>
                        <input type="email" required value = {email} onChange = {resetPasswordHandler}/>
                        <button type="submit">Send</button>
                        
                    </div>
                    </form>
            </div>
            {success && <MailModal title="Success"/>}
        </React.Fragment>
    );
}
export default ResetPassword;