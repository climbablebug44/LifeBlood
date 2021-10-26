import React from 'react';
import useInput from '../Hooks/use-input';
import {useParams} from 'react-router';
import './Updatepassword.css';
const Updatepassword = (props)=>{
  const {value:enteredupdatePassword,
        hasError:updatePasswordHasError,
        valueChangeHandler:updatePasswordChangeHandler,
      inputBlurHandler:updatePasswordBlurHandler
    } = useInput((value)=>value.trim().length>=6);
    const {token} = useParams();
    const formSubmitHandler = (event)=>{
      event.preventDefault();
      props.onReset(event,{password:enteredupdatePassword},token);
    }
  return(
    <div className="resetFormContainer">
        <div className="resetForm">
            <form  method="POST" onSubmit={formSubmitHandler}>
            <div className="FormFill">
              <div className="resetForm_span">
                <span>New Password</span>
              </div>
              <br></br>
              <div className="resetForm_input"> 
                  <input type="password" name="password" value={enteredupdatePassword} onBlur={updatePasswordBlurHandler} onChange={updatePasswordChangeHandler} ></input>
                  <br></br>
                  {updatePasswordHasError && <p className='error-text'>Password must be of length greater than 6</p>}                      
              </div>  
              <br></br>
              </div>
              <br></br>
              <div className="resetForm_btn">
                <button type="submit">Update Password</button>
              </div>
            </form>
        </div> 
    </div> 

  );
};
export default Updatepassword;