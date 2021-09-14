import React,{useRef} from 'react';
import './Login.css';

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

}
export default Login;