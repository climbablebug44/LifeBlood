import React,{useState} from 'react';
import ReactDom from 'react-dom';
import './DetailsForm.css';
const DetailsForm = (props)=>{
    const [age,setAge] = useState(null);
    const [bloodGrp,setBloodGrp] = useState(null);
    const [phone,setPhone] = useState(null);
    const [pincode,setPincode] = useState(null);
    const ageChangeHandler = (event)=>{
        setAge(event.target.value);
    }
    const bloodGrpChangeHandler = (event)=>{
        setBloodGrp(event.target.value);
    }
    const phoneChangeHandler = (event)=>{
        setPhone(event.target.value);
    }
    const pincodeChangeHandler = (event)=>{
        setPincode(event.target.value);
    }
    const DetailsFormSubmitHandler= (event)=>{
        event.preventDefault();
        props.Details(event,{age:age,bloodGrp:bloodGrp,phone:phone,pincode:pincode});
    }
  return (
    ReactDom.createPortal(
            <div className="DetailsForm_container">
                <header className="DetailsForm_header">
                    <h1>LIFEBLOOD</h1>
                </header>
                <div className="DetailsForm_HeadLine">
                    <span>Please Enter Following Details To Continue</span>
                </div>
                <div className="detailsForm_div">
                    <form onSubmit={DetailsFormSubmitHandler}>
                        <div className="DetailsFormWrap">
                            <div className="DetailsForm w1">
                                <input type="number" onChange = {ageChangeHandler} value = {age} required/>
                                <span>Age</span>
                            </div>
                            <div className="DetailsForm w1">
                                <input type="text" onChange = {bloodGrpChangeHandler} value = {bloodGrp} required/>
                                <span>Blood Grp</span>
                            </div>
                            <div className="DetailsForm w1">
                                <input type="number" onChange = {pincodeChangeHandler} value = {pincode} required/>
                                <span>pincode</span>
                            </div>
                            <div className="DetailsForm w1">
                                <input type="number" onChange = {phoneChangeHandler} value = {phone} required/>
                                <span>Phone No.</span>
                            </div>
                        </div>
                        <div className="DetailsForm-btn">
                            <button type="submit">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
      ,document.getElementById("DetailsForm-root"))
  );
  
}
export default DetailsForm;