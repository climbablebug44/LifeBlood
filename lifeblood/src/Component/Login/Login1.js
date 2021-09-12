import React from 'react';
import {Link} from 'react-router-dom';
import './Login1.css';
import useInput from '../../Hooks/use-input';
const Login1 = (props)=>{

    const {value:enteredEmail,
        isValid:enteredEmailIsValid,
         hasError:emailHasError,
         valueChangeHandler:emailChangeHandler,
         inputBlurHandler:emailBlurHandler,
         reset:resetEmailInput} = useInput((value)=>value.includes('@'));  

    const {value:enteredPassword,
            isValid:enteredPasswordIsValid,
            hasError:passwordHasError,
            valueChangeHandler:passwordChangeHandler,
            inputBlurHandler:passwordBlurHandler,
            reset:resetPasswordInput} = useInput((value)=>value.trim().length>=6);
    const formChangeHandler = (event)=>{
          
           props.onLogin(event,{email:enteredEmail,password:enteredPassword})    
           
        }
        const inputEmailClass = emailHasError ?'form-control invalid': 'form-control';
        const inputPasswordClass = passwordHasError ? 'form-control invalid': 'form-control';             
   return (
       <div className="login1-Container">
           
           <div className="login1FormContainer">
               <div className="login1Form">
                   <form onSubmit={formChangeHandler}>
                       <div className="login1facebook"> <a href="/" className='social'>  <i className="fa fa-facebook"></i><span>Continue with Facebook</span></a></div>
                       <div className="login1google">   <a href="/" className='social'>  <i className="fa fa-google"></i></a><span>Continue with Google</span></div>
                       <div className="login1github"><a href="/" className='social'>  <i className="fa fa-github"></i></a><span>Continue with Github</span></div>
                        <div className="login1Text"><span>Have a Password? Continue with your email address</span></div>
                        <div className="login1FormFill">
                            <span>Email</span>
                            <input type="text"  value={enteredEmail} onBlur={emailBlurHandler} name="email"  onChange={emailChangeHandler} className={inputEmailClass}></input>
                            {emailHasError && <p className='error-text'>Please enter a valid e-mail</p>}
                            <span>Password</span>
                            <input type="password" name="password" value={enteredPassword} onBlur={passwordBlurHandler} onChange={passwordChangeHandler} ></input>
                            {passwordHasError && <p className='error-text'>Password must be of length greater than 8</p>}

                            <button type="submit">Continue</button>
                            <span className="span1"><a href="/"><Link to="/reset-password">Forget password?</Link></a></span>
                        </div>
                        
                   </form>
               </div>
           </div>
       </div>
   );
};
export default Login1;