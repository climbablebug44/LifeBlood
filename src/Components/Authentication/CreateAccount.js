import React from 'react';
import './CreateAccount.css';
import useInput from '../../Hooks/use-input';

import GoogleImg from '../../Images/google-img.jpg';
import FacebookImg from '../../Images/facebook.png';

const CreateAccount = (props)=>{
  const {
      value:enteredBloodgrp,
      valueChangeHandler:bloodgrpChangeHandler,
      inputBlurHandler:bloodgrpBlurHandler
  } = useInput(value=>value.trim()!=='');
  const {
        value:enteredPinCode,
        valueChangeHandler:pinCodeChangeHandler,
        inputBlurHandler:pinCodepBlurHandler
    } = useInput(value=>value.trim()!=='');
  const {value:enteredName,
     valueChangeHandler:nameChangeHandler,
     inputBlurHandler:nameBlurHandler
     } = useInput((value)=>value.trim()!=='');

const {value:enteredEmail,
      hasError:emailHasError,  
      valueChangeHandler:emailChangeHandler,
      inputBlurHandler:emailBlurHandler
    } = useInput((value)=>value.includes('@'));    
    const {value:enteredPhone,
         
        valueChangeHandler:phoneChangeHandler,
        inputBlurHandler:phoneBlurHandler
      } = useInput((value)=>value.trim().length===10);    
  
      const {value:enteredPassword,
          hasError:passwordHasError,
          valueChangeHandler:passwordChangeHandler,
          inputBlurHandler:passwordBlurHandler
          } = useInput((value)=>value.trim().length>=8);  
      const {value:enteredPassword1,
        hasError:passwordHasError1,
           valueChangeHandler:passwordChangeHandler1,
           inputBlurHandler:passwordBlurHandler1
           } = useInput((value)=>value.trim().length>=8);  
     
   const formsubmitHandler = (event)=>{
    
     event.preventDefault();
    props.onSignup(event,{pincode:enteredPinCode,phone:enteredPhone,bloodGrp:enteredBloodgrp,email:enteredEmail,password:enteredPassword,name:enteredName,confirmPassword:enteredPassword1});
    }
    const handleLogin = ()=>{
            
        window.open('http://localhost:3000/auth/google',"_self");
    }  
    const handleLogin1 = ()=>{
        
        window.open('http://localhost:3000/auth/facebook',"_self");
    } 
    const inputEmailClass = emailHasError ?'form-control invalid': 'form-control';
    const inputPasswordClass = passwordHasError ?'form-control invalid': 'form-control';
    const inuptPasswordClass1  = passwordHasError1 ?'form-control invalid': 'form-control';
  return  (
    <div className="create-Container">
    <div className="createFormContainer">
        <div className="createForm">
            <form onSubmit={formsubmitHandler}>
                <div className="facebookContainer" onClick = {handleLogin1}>
                    <img src={FacebookImg} alt = "Facebook Icon"/>
                    <p>Login With Facebook</p>
                </div> 
                <div className="googleContainer" onClick = {handleLogin}>
                    <img src={GoogleImg} alt = "Google Icon"/>
                    <p>Login With Google</p>
                </div>
                 <div className="login1Text"><span>or enter your email address</span></div>
                 <div className="createFormFill">
                    <span>Full Name</span>
                    <input type="text" name="name" value={enteredName} onBlur={nameBlurHandler} onChange={nameChangeHandler}></input>
                    <span>Phone Number</span>
                    <input type="text" name="phone" value={enteredPhone} onBlur={phoneBlurHandler} onChange={phoneChangeHandler}></input>
                    <span>Blood Group</span>
                    <input type="text" name="bloodgrp" value={enteredBloodgrp} onBlur = {bloodgrpBlurHandler} onChange = {bloodgrpChangeHandler} required/>
                    <span>Pincode</span>
                    <input type="pincode" name="pincode" value={enteredPinCode} onBlur = {pinCodepBlurHandler} onChange = {pinCodeChangeHandler} required></input>
                    <span>Email</span>
                    <input type="email"  name="email" value={enteredEmail} onBlur={emailBlurHandler} onChange={emailChangeHandler} className={inputEmailClass}></input>
                    {emailHasError && <p className='error-text'>Please enter a valid e-mail</p>}
                    <span>Password</span>
                    <input type="password"  name="password" value={enteredPassword} onBlur={passwordBlurHandler} onChange={passwordChangeHandler} className={inputPasswordClass}></input>
                    {passwordHasError && <p className='error-text'>Password must be of length greater than 8</p>}
                    <span>Confirm Password</span>
                    <input type="password"  name="confirmPassword" value={enteredPassword1} onBlur={passwordBlurHandler1} onChange={passwordChangeHandler1} className={inuptPasswordClass1}></input>
                    <button type="submit">Continue</button>
                 </div>
                 
            </form>
        </div>
    </div>
</div>
  );
};
export default CreateAccount;

