import React from 'react';
import './CreateAccount.css';
import useInput from '../../Hooks/use-input';
import {Link} from 'react-router-dom';
const CreateAccount = (props)=>{
  const {value:enteredName,
    isValid:enterednameIsValid,
     hasError:inputHasError,
     valueChangeHandler:nameChangeHandler,
     inputBlurHandler:nameBlurHandler,
      reset:resetNameInput} = useInput((value)=>value.trim()!=='');

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
           reset:resetPasswordInput} = useInput((value)=>value.trim().length>=8);  
      const {value:enteredPassword1,
          isValid:enteredPasswordIsValid1,
            hasError:passwordHasError1,
           valueChangeHandler:passwordChangeHandler1,
           inputBlurHandler:passwordBlurHandler1,
             reset:resetPasswordInput1} = useInput((value)=>value.trim().length>=8);  
     
   const formsubmitHandler = (event)=>{
     event.preventDefault();
     console.log(enteredEmail);
             props.onsignup(event,{email:enteredEmail,password:enteredPassword,name:enteredName,confirmPassword:enteredPassword1});
    }
  return  (
    <div className="login1-Container">
    
    <div className="login1FormContainer">
        <div className="login1Form">
            <form onSubmit={formsubmitHandler}>
                <div className="login1facebook"> <a href="/" className='social'>  <i className="fa fa-facebook"></i><span>Continue with Facebook</span></a></div>
                <div className="login1google">   <a href="/" className='social'>  <i className="fa fa-google"></i></a><span>Continue with Google</span></div>
                <div className="login1github"><a href="/" className='social'>  <i className="fa fa-github"></i></a><span>Continue with Github</span></div>
                 <div className="login1Text"><span>or enter your email address</span></div>
                 <div className="createFormFill">
                 <span>Full Name</span>
                 <input type="text" name="name" value={enteredName} onBlur={nameBlurHandler} onChange={nameChangeHandler}></input>
                     <span>Email</span>
                 <input type="email"  name="email" value={enteredEmail} onBlur={emailBlurHandler} onChange={emailChangeHandler}></input>
                
                 <span>Password</span>
                 <input type="password"  name="password" value={enteredPassword} onBlur={passwordBlurHandler} onChange={passwordChangeHandler}></input>
                
                 <span>Confirm Password</span>
                 <input type="password"  name="confirmPassword" value={enteredPassword1} onBlur={passwordBlurHandler1} onChange={passwordChangeHandler1}></input>
             
                 <button type="submit">Continue</button>
                <p className="span3"> Already have an account?</p><a href="/"><Link to="/login">Login</Link></a>
                 </div>
                 
            </form>
        </div>
    </div>
</div>
  );
};
export default CreateAccount;

