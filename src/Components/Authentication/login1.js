import React from 'react';
import './login1.css';
import GoogleImg from '../../Images/google-img.jpg';
import useInput from '../../Hooks/use-input';
import FacebookImg from '../../Images/facebook.png';
const Login1 = (props)=>{
    
    const {value:enteredEmail,
       
         hasError:emailHasError,
         valueChangeHandler:emailChangeHandler,
         inputBlurHandler:emailBlurHandler
       } = useInput((value)=>value.includes('@'));  

    const {value:enteredPassword,
         
            hasError:passwordHasError,
            valueChangeHandler:passwordChangeHandler,
            inputBlurHandler:passwordBlurHandler
        } = useInput((value)=>value.trim().length>=6);
    const formChangeHandler = (event)=>{
           event.preventDefault();
           props.onLogin(event,{email:enteredEmail,password:enteredPassword})   
        }
        const handleLogin = ()=>{
            
            window.open('http://localhost:3000/auth/google',"_self");
        }  
        const handleLogin1 = ()=>{
            
            window.open('http://localhost:3000/auth/facebook',"_self");
        }    
        const inputEmailClass = emailHasError ?'form-control invalid': 'form-control';
        
   return (
       <div className="login1-Container">
           
           <div className="login1FormContainer">
               <div className="login1Form">
                   <form onSubmit={formChangeHandler}>
                        <div className="facebookContainer" onClick = {handleLogin1}>
                            <img src={FacebookImg} alt = "Facebook Icon"/>
                            <p>Login With Facebook</p>
                        </div>   
                        <div className="googleContainer" onClick = {handleLogin}>
                            <img src={GoogleImg} alt = "Google Icon"/>
                            <p>Login With Google</p>
                        </div>    
                        <div className="login1Text"><span>Have a Password? Continue with your email address</span></div>
                        <div className="login1FormFill">
                            <span>Email</span>
                            <input type="text"  value={enteredEmail} onBlur={emailBlurHandler} name="email"  onChange={emailChangeHandler} className={inputEmailClass}></input>
                            {emailHasError && <p className='error-text'>Please enter a valid e-mail</p>}
                            <span>Password</span>
                            <input type="password" name="password" value={enteredPassword} onBlur={passwordBlurHandler} onChange={passwordChangeHandler} ></input>
                            {passwordHasError && <p className='error-text'>Password must be of length greater than 8</p>}

                            <button type="submit">Continue</button>
                            <span className="span1"><a href="/resetPassword">Forget password?</a></span>
                        </div>
                        
                   </form>
               </div>
           </div>
       </div>
   );
};
export default Login1;
