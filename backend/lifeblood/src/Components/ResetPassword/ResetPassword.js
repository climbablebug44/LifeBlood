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
        fetch("/api/resetpassword/sendlink",{
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
            // console.log("sent successfully");
        })
        .catch(err=>{
            // console.log(err);
        })
    }
    return (
        <React.Fragment>
            <div className="resetPassword_container">
                <form onSubmit = {ResetPasswordSubmitHandler}>
                    <div className="resetPassword_div">
                        <div className="resetpassword_span">
                        <span>Enter Your E-mail</span>
                        </div>
                        <br></br>
                        <div className="resetpassword_input">
                           <input type="email" required value = {email} onChange = {resetPasswordHandler}/>
                        </div>
                        <br></br>
                        <div className="resetpassword_btn">
                           <button type="submit">Send Link</button>
                        </div>
                    </div>
                    </form>
            </div>
            {success && <MailModal title="Success"/>}
        </React.Fragment>
    );
}
export default ResetPassword;