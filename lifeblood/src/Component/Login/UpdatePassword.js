import React from 'react';
import useInput from '../../Hooks/use-input';
import './Reset.css';
import { useParams } from 'react-router';
const UpdatePassword = (props)=>{
    const {value:enteredPassword,
        isValid:enteredPasswordIsValid,
        hasError:passwordHasError,
        valueChangeHandler:passwordChangeHandler,
        inputBlurHandler:passwordBlurHandler,
        reset:resetPasswordInput} = useInput((value)=>value.trim().length>=6);
        const {token} = useParams();
        console.log(token);
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        props.onReset(event,{password:enteredPassword},token);
    }
    
    return (
        <div className="login1-Container">
            <div className="login1Header">
            <span>ProReview</span>
            </div>
            <div className="resetFormContainer">
                <div className="resetForm">
                    <form action="" method="POST" onSubmit={formSubmitHandler}>
                    <div className="FormFill">
                            <span>New Password</span>
                            <input type="password" name="password" value={enteredPassword} onBlur={passwordBlurHandler} onChange={passwordChangeHandler} ></input>
                        {passwordHasError && <p className='error-text'>Password must be of length greater than 8</p>}                        
                    </div>
                    <button type="submit">Update Password</button>
                    </form>
                </div> 
            </div> 
        </div>   

    );
};
export default UpdatePassword;