import React,{useRef} from 'react';
import './Login.css';
import Loginsvg from './Loginsvg';
import Modal from '../../UI/Modal';
import useInput from '../../Hooks/use-input';
const Login = (props)=>{
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
     
    const {value:enteredEmail1,
            isValid:enteredEmailIsValid1,
             hasError:emailHasError1,
             valueChangeHandler:emailChangeHandler1,
             inputBlurHandler:emailBlurHandler1,
             reset:resetEmailInput1} = useInput((value)=>value.includes('@'));  

    const {value:enteredPassword1,
            isValid:enteredPasswordIsValid1,
             hasError:passwordHasError1,
             valueChangeHandler:passwordChangeHandler1,
             inputBlurHandler:passwordBlurHandler1,
              reset:resetPasswordInput1} = useInput((value)=>value.trim().length>=8);          

    const formChangeHandler = (event)=>{
            event.preventDefault();
           if(!enterednameIsValid && !enteredEmailIsValid && !enteredPasswordIsValid)
           {
               return;
           }     
           resetNameInput();
           
           resetEmailInput();
           resetPasswordInput();
    }     
         const formChangeHandler1 = (event)=>{
            event.preventDefault();
           if(!enteredEmailIsValid1 && !enteredPasswordIsValid1)
           {
               return;
           }     
           resetEmailInput1();
           resetPasswordInput1();
    }          
    const signUpButton = useRef();
    const signInButton = useRef();
    const container = useRef();
    //console.log(signInButton, signUpButton);
    
    const signUpHandler=()=>{
        container.current.classList.add("right-panel-active");
    }
    const signInHandler=()=>{
        container.current.classList.remove("right-panel-active");
    }
    const inputNameClass = inputHasError ? 'form-control invalid' : 'form-control';
    const inputEmailClass = emailHasError ?'form-control invalid': 'form-control';
    const inputPasswordClass = passwordHasError ? 'form-control invalid': 'form-control';
    const inputEmailClass1 = emailHasError1 ?'form-control invalid': 'form-control';
    const inputPasswordClass1 = passwordHasError1 ? 'form-control invalid': 'form-control'; 
  return (
  <Modal>
 <div className='container' id="container" ref={container}>
     <div className='form-container sign-up'>
     <i className="fa fa-times" onClick={()=>{props.hide()}}></i>
             <form onSubmit={formChangeHandler}>
                 
                 <h2 className='title'>Create Account</h2>
                 <div className='social-container' >
                    <a href="/" className='social'>  <i className="fa fa-facebook"></i></a>
                    <a href="/" className='social'>  <i className="fa fa-google"></i></a>
                    <a href="/" className='social'>  <i className="fa fa-linkedin"></i></a>
                    <a href="/" className='social'>  <i className="fa fa-github"></i></a>
                 </div>
                 <span>or use your email for registration</span>
                 <input type="text" className={inputNameClass} value={enteredName} onBlur={nameBlurHandler} onChange={nameChangeHandler} placeholder="User Name"/>
                 {inputHasError && <p className='error-text'>Name must not be empty</p>}

                 <input type="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} className={inputEmailClass} placeholder="Email"/>
                 {emailHasError && <p className='error-text'>Please enter a valid e-mail</p>}
                 <input type="password" placeholder="Password" value={enteredPassword} onBlur={passwordBlurHandler} className={inputPasswordClass} onChange={passwordChangeHandler}/>
                 {passwordHasError && <p className='error-text'>Password must be of length greater than 8</p>}
                 <button className="button">sign up</button>
             </form>        
     </div>
     <div className="form-container sign-in">
     <i className="fa fa-times" id="f1" onClick={()=>{props.hide()}}></i>
              <form onSubmit={formChangeHandler1}>
                 <h2 className='title'>Log in</h2>
                 <div className='social-container'>
                    <a href="/" className='social'> <i className="fa fa-facebook"></i></a>
                    <a href="/" className='social'> <i className="fa fa-google"></i></a>
                    <a href="/" className='social'> <i className="fa fa-linkedin"></i></a>
                    <a href="/" className='social'> <i className="fa fa-github"></i></a>
                 </div>
                 <span>or use your account</span>
    
                 <input type="email" placeholder="Email" value={enteredEmail1} onBlur={emailBlurHandler1} onChange={emailChangeHandler1} className={inputEmailClass1} />
                 {emailHasError1 && <p className='error-text'>Please enter a valid e-mail</p>}
                 <input type="password" placeholder="Password" value={enteredPassword1} onBlur={passwordBlurHandler1} onChange={passwordChangeHandler1} className={inputPasswordClass1}/>
                 {passwordHasError1 && <p className='error-text'>Password must be of length greater than 8</p>}
                 <a href='/'>Forget Your Password?</a>
                 <button className="button">log in</button>
             </form>   
     </div>
    <div className='overlay-container'>
        <div className='overlay'>
            <div className='overlay-panel overlay-left'>
                <h1 className='title'>Welcome to  </h1>
                <div className='logo'>
              <span className='logo1'>Prof</span>
              <span className='logo2'>Review</span>
              </div>
                <Loginsvg></Loginsvg>
                <button className="optionchange" ref={signInButton} onClick={signInHandler}>Log in</button>
            </div>
            <div className='overlay-panel  overlay-right'>
              <h1 className='title'>For New Users</h1>
              <Loginsvg></Loginsvg>
              <button className="optionchange" ref={signUpButton} onClick={signUpHandler}>Sign up</button>
            </div>
        </div>
        
    </div>
 </div>
 </Modal>    
  );
}
export default Login;