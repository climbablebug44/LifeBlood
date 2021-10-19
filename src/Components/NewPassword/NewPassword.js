import React,{useState} from  'react';
import './NewPassword.css';
const NewPassword = ()=>{
    const [newPassword,setNewPassword] = useState(null);
    const newPasswordHandler = (event)=>{
         setNewPassword(event.target.value);
    }
    const newPasswordFormSubmitHandler = (event)=>{
       event.preventDefault();
       fetch("http://localhost:4000/api/",{
           method:"POST",
           headers:{
               "content-Type":"application/json"
           },
           body:JSON.stringify({
               newpassword:newPassword
           })
       })
       .then(res=>{
           if(res!==200)
           {
               throw new Error("Password Not Updated")
           }
           return res.json()
       })
       .then(resData=>{
           console.log("updated");
       })
       .catch(res=>{
           console.log(res);
       })
    }
 return(
     <div className="NewPassword_container">
         <form onSubmit = {newPasswordFormSubmitHandler}>
             <div className="newPassword">
                <span>New Password</span>
                <input type="password" required value = {newPassword} onChange = {newPasswordHandler}/>
                <button type="submit">Send</button>
             </div>
         </form>
     </div>
 );
}
export default NewPassword;