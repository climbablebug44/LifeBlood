import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import useInput from '../../Hooks/use-input';
import './Reset.css';

const Reset = (props)=>{
    const {value:enteredEmail,
        isValid:enteredEmailIsValid,
         hasError:emailHasError,
         valueChangeHandler:emailChangeHandler,
         inputBlurHandler:emailBlurHandler,
         reset:resetEmailInput} = useInput((value)=>value.includes('@')); 
    
    const inputEmailClass = emailHasError ?'form-control invalid': 'form-control';
    const formSubmitHandler = (event)=>{
        props.onReset(event,{email:enteredEmail});
    } 
    return (
        <div className="login1-Container">
            <div className="login1Header">
            <span>ProReview</span>
            </div>
            <div className="resetFormContainer">
                <div className="resetForm">
                    <form onSubmit={formSubmitHandler}>
                    <div className="resetFormFill">
                            <span>Email</span>
                        <input type="email" name="email" value={enteredEmail} onBlur={emailBlurHandler}  onChange={emailChangeHandler} className={inputEmailClass} required></input>
                        {emailHasError && <p className='error-text'>Please enter a valid e-mail</p>}
                    </div>
                    <button type="submit">send Reset Password link</button>
                    </form>
                </div> 
            </div> 
        </div>   

    );
};
export default Reset;